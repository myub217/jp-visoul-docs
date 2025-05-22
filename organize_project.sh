#!/data/data/com.termux/files/usr/bin/bash
set -e

GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}🚀 กำลังจัดโครงสร้างโฟลเดอร์โปรเจกต์...${NC}"

mkdir -p ~/Acode

if [ -d ~/jp-visoul-docs ]; then
  mv ~/jp-visoul-docs ~/Acode/
  echo -e "${GREEN}✔ ย้าย jp-visoul-docs ไปยัง ~/Acode/${NC}"
else
  echo "⚠ ไม่พบโฟลเดอร์ jp-visoul-docs ใน ~/"
fi

mkdir -p ~/Acode/tools

for file in ~/setup*.sh ~/check*.sh ~/install-zsh.sh; do
  if [ -f "$file" ]; then
    mv "$file" ~/Acode/tools/
    echo -e "${GREEN}✔ ย้าย $(basename "$file") ไปยัง ~/Acode/tools/${NC}"
  fi
done

echo -e "${GREEN}📁 โครงสร้างสุดท้ายของ ~/Acode/${NC}"
tree -L 2 ~/Acode

echo -e "${GREEN}✅ เสร็จสิ้นการจัดโครงสร้างโปรเจกต์${NC}"
