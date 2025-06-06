#!/data/data/com.termux/files/usr/bin/bash

MODE="${1:---mode=full}"

pkg update -y && pkg upgrade -y
pkg install -y git curl wget zsh nano neofetch htop tree
pkg install -y root-repo x11-repo
pkg install -y nodejs python tsu clang make build-essential
pkg install -y ruby lua php perl
pkg install -y openssh nmap net-tools curl dnsutils

# Powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/.powerlevel10k
echo 'source ~/.powerlevel10k/powerlevel10k.zsh-theme' >> ~/.zshrc

# Fastfetch
pkg install -y fastfetch
echo "fastfetch" >> ~/.zshrc

# Aliases
echo -e "\n# Custom Aliases" >> ~/.zshrc
echo "alias ll='ls -la'" >> ~/.zshrc
echo "alias gs='git status'" >> ~/.zshrc
echo "alias py='python'" >> ~/.zshrc

# Modes
if [[ "$MODE" == "--mode=dev" ]]; then
  pkg install -y nodejs python git
elif [[ "$MODE" == "--mode=security" ]]; then
  pkg install -y hydra sqlmap metasploit
elif [[ "$MODE" == "--mode=full" ]]; then
  pkg install -y hydra sqlmap metasploit
fi

echo -e "\n✅ ติดตั้งเรียบร้อย พร้อมใช้งาน Termux Dev Toolkit 🚀"