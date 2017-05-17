Vagrant.configure(2) do |config|
  config.vm.box = 'ubuntu/trusty64'

  config.vm.provider 'virtualbox' do |vb|
    vb.gui = false
    vb.memory = 1024
  end

  config.vm.provision 'shell', privileged: false, keep_color: true, inline: <<-SHELL
    sudo apt-get -yq update
    sudo apt-get -yq upgrade

    sudo apt-get -yq install emacs

    sudo apt-get -yq install git

    sudo apt-get -yq install ruby

    sudo apt-get -yq install build-essential libssl-dev
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    . "$NVM_DIR/nvm.sh"
    nvm install node
  SHELL
end

