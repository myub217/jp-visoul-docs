#!/bin/bash
set -e

# สีข้อความ
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 1. สร้าง SSH key ถ้ายังไม่มี
if [ ! -f "$HOME/.ssh/id_ed25519" ]; then
  echo -e "${YELLOW}🔐 กำลังสร้าง SSH key...${NC}"
  ssh-keygen -t ed25519 -C "your_email@example.com" -f "$HOME/.ssh/id_ed25519" -N ""
else
  echo -e "${GREEN}✅ พบ SSH key อยู่แล้ว${NC}"
fi

# 2. แสดง public key ให้คัดลอกไป GitHub
echo -e "\n${YELLOW}📋 คัดลอก SSH key ด้านล่างไปเพิ่มใน GitHub > Settings > SSH and GPG keys${NC}\n"
cat ~/.ssh/id_ed25519.pub
echo -e "\n${YELLOW}⏳ เมื่อเพิ่มเรียบร้อยแล้ว กด Enter เพื่อดำเนินการต่อ...${NC}"
read

# 3. ตั้งค่า git remote ให้ใช้ SSH
echo -e "${YELLOW}🔁 ตั้งค่า remote ให้ใช้ SSH...${NC}"
git remote set-url origin git@github.com:myub217/jp-visoul-docs.git

# 4. ทดสอบ push
echo -e "${YELLOW}🚀 ทดสอบ push ไปยัง GitHub...${NC}"
git push

echo -e "${GREEN}✅ เสร็จสิ้น พร้อมใช้งาน SSH กับ GitHub แล้ว!${NC}"
