#!/bin/bash
set -e

# ฟังก์ชันแสดงผลลัพธ์ด้วยสีสันเท่ๆ
log()   { echo -e "\033[1;32m[INFO]\033[0m  $1"; }
warn()  { echo -e "\033[1;33m[WARN]\033[0m  $1"; }
error() { echo -e "\033[1;31m[ERROR]\033[0m $1"; exit 1; }

# ตรวจสอบว่าคำสั่งมีในระบบไหม
check_command() { command -v "$1" >/dev/null 2>&1; }

# ติดตั้งแพ็กเกจที่จำเป็นบน Termux
install_packages() {
  log "กำลังอัปเดตแพ็กเกจและติดตั้ง dependencies ที่จำเป็น..."
  pkg update -y && pkg upgrade -y
  for pkgname in git nodejs yarn zsh; do
    if check_command "$pkgname"; then
      log "$pkgname พร้อมใช้งานแล้ว"
    else
      log "ติดตั้ง $pkgname..."
      pkg install -y "$pkgname"
    fi
  done
}

# โคลนหรืออัปเดต repo
clone_repo() {
  local repo_url="https://github.com/myub217/jp-visoul-docs.git"
  local target_dir="$HOME/jp-visoul-docs"

  if [ -d "$target_dir" ]; then
    warn "โฟลเดอร์ $target_dir มีอยู่แล้ว กำลังดึงอัปเดตล่าสุด..."
    cd "$target_dir"
    git pull --ff-only
  else
    log "กำลังโคลนโปรเจกต์จาก GitHub..."
    git clone "$repo_url" "$target_dir"
  fi
}

# ติดตั้ง dependencies ด้วย yarn และเพิ่ม vite เป็น dev dependency
install_dependencies() {
  cd "$HOME/jp-visoul-docs" || error "เข้าโฟลเดอร์โปรเจกต์ไม่ได้!"
  log "ลบ node_modules และ lockfile เก่า..."
  rm -rf node_modules yarn.lock

  log "ติดตั้ง dependencies ด้วย yarn..."
  yarn install

  log "เพิ่ม vite เป็น dev dependency..."
  yarn add -D vite
}

# ตรวจสอบ Node.js เวอร์ชัน
check_node_version() {
  if ! check_command node; then
    error "ไม่พบ Node.js ในระบบ กรุณาติดตั้งก่อน"
  fi
  local ver=$(node -v | grep -oE '[0-9]+' | head -1)
  if [ "$ver" -lt 16 ]; then
    warn "Node.js เวอร์ชันต่ำกว่า 16 อาจมีปัญหาในการทำงาน"
  else
    log "Node.js เวอร์ชัน $ver พร้อมใช้งาน"
  fi
}

# ตั้ง alias 'shz' สำหรับ source ~/.zshrc
setup_alias() {
  local alias_line="alias shz='source ~/.zshrc'"
  if grep -Fxq "$alias_line" ~/.zshrc; then
    log "Alias 'shz' มีใน ~/.zshrc แล้ว"
  else
    echo "$alias_line" >> ~/.zshrc
    log "เพิ่ม alias 'shz' ใน ~/.zshrc เรียบร้อย"
  fi
}

# รัน Vite dev server พร้อม host
run_dev_server() {
  cd "$HOME/jp-visoul-docs" || error "เข้าโฟลเดอร์โปรเจกต์ไม่ได้!"
  log "กำลังเริ่ม Vite dev server บนโฮสต์ของเครื่อง..."
  yarn dev --host
}

main() {
  log "เริ่มตั้งค่า JP Visual & Docs บน Termux"

  install_packages
  check_node_version
  clone_repo
  install_dependencies
  setup_alias

  log "การตั้งค่าเสร็จสิ้น!"
  echo -e "\033[1;36mรันคำสั่งเพื่อเริ่ม dev server:\033[0m yarn dev --host"
  echo "จากนั้นเปิดเบราว์เซอร์ที่ http://localhost:5173 หรือ http://<IP-มือถือ>:5173 เพื่อเข้าชมเว็บ"

  # เปิดบรรทัดนี้ถ้าต้องการให้เริ่ม dev server อัตโนมัติหลังติดตั้งเสร็จ
  run_dev_server
}

main "$@"