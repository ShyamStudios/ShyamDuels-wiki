(function () {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (overlay) {
      overlay.style.display = 'block';
      setTimeout(() => overlay.style.opacity = '1', 10);
    }
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) {
      overlay.style.opacity = '0';
      setTimeout(() => overlay.style.display = 'none', 250);
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (sidebar && sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  if (sidebar) {
    sidebar.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          closeSidebar();
        }
      });
    });
  }

  const currentPath = window.location.pathname;
  const currentFile = currentPath.split('/').pop() || 'index.html';

  const pathParts = currentPath.split('/');
  const parentFolder = pathParts.length > 2 ? pathParts[pathParts.length - 2] : '';

  document.querySelectorAll('.sidebar a, .topnav .nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const hrefParts = href.split('/');
    const file = hrefParts.pop();
    const folder = hrefParts.length > 0 ? hrefParts.pop() : '';

    const isSameFile = (file === currentFile);
    const isSameFolder = (folder === parentFolder || (!folder && !parentFolder) || (folder === '..' && !parentFolder));

    if (currentFile === 'index.html' && (href === 'index.html' || href === '../index.html')) {
      a.classList.add('active');
    } else if (isSameFile && (parentFolder === '' || isSameFolder)) {
      a.classList.add('active');
    }
  });

  document.querySelectorAll('pre').forEach(pre => {
    if (pre.querySelector('.copy-btn')) return;

    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.textContent = 'Copy';
    pre.appendChild(button);

    button.addEventListener('click', () => {
      const code = pre.querySelector('code');
      const text = code ? code.innerText : pre.innerText;

      navigator.clipboard.writeText(text.trim()).then(() => {
        button.textContent = 'Copied!';
        button.style.background = 'rgba(16, 185, 129, 0.2)';
        button.style.borderColor = 'rgba(16, 185, 129, 0.4)';
        button.style.color = '#10b981';

        setTimeout(() => {
          button.textContent = 'Copy';
          button.style.background = '';
          button.style.borderColor = '';
          button.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        button.textContent = 'Failed';
      });
    });
  });
})();
