#!/data/data/com.termux/files/usr/bin/sh
echo "🔎 กำลังรัน setup_zshrc_termux.sh จาก home directory..."

if [ -f "$HOME/setup_zshrc_termux.sh" ]; then
  chmod +x "$HOME/setup_zshrc_termux.sh"
  echo "⚙️ รัน setup_zshrc_termux.sh ด้วย zsh..."
  zsh "$HOME/setup_zshrc_termux.sh"
else
  echo "❌ ไม่พบไฟล์ setup_zshrc_termux.sh ในโฟลเดอร์ home ($HOME)"
  echo "โปรดตรวจสอบไฟล์ก่อนแล้วลองใหม่อีกครั้ง"
fi
