const hamburgerMenu = document.querySelector('#hamburger-menu');

const mobileNavMenu = document.querySelector('#mobile-nav-menu');
const mobileNavOverlay = document.querySelector('#mobile-nav-overlay');
const documentBody = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
    mobileNavMenu.classList.add('mobile-nav-menu--open');
    mobileNavOverlay.classList.add('mobile-nav-overlay--display-block');
    documentBody.classList.add('overflow-body--hidden');
});

document.body.addEventListener('click', (e) => {
    if (
        e.target.classList.contains('mobile-nav-overlay') ||
        e.target.classList.contains('close-x-icon')
    ) {
        mobileNavMenu.classList.remove('mobile-nav-menu--open');
        mobileNavOverlay.classList.remove('mobile-nav-overlay--display-block');
        documentBody.classList.remove('overflow-body--hidden');
    }
});

/*
{
  "workbench.colorTheme": "Atom One Dark",
  "liveServer.settings.CustomBrowser": "chrome",

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": ["javascript"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "editor.wordWrap": "wordWrapColumn",
  "editor.wrappingIndent": "same",
  "editor.wordWrapColumn": 80,
  "html.autoClosingTags": false,
  "liveServer.settings.port": 3000,
  "git.openRepositoryInParentFolders": "never",
  "eslint.workingDirectories": [],
  "liveServer.settings.donotVerifyTags": true,
  "editor.stickyScroll.enabled": false,
  "eslint.codeActionsOnSave.rules": null,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "workbench.tree.enableStickyScroll": false,
  "html.format.wrapLineLength": 0,
  "git.ignoreMissingGitWarning": true,
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "icon": "terminal-powershell"
    },
    "Command Prompt": {
      "path": [
        "${env:windir}\\Sysnative\\cmd.exe",
        "${env:windir}\\System32\\cmd.exe"
      ],
      "args": [],
      "icon": "terminal-cmd"
    },
    "Git Bash": {
      "source": "Git Bash"
    },
    "Ubuntu (WSL)": {
      "path": "C:\\WINDOWS\\System32\\wsl.exe",
      "args": ["-d", "Ubuntu"]
    }
  },
  "terminal.integrated.defaultProfile.windows": "Ubuntu (WSL)",
  "workbench.startupEditor": "none"
}

*/
