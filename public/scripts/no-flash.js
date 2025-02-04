(() => {
  if (typeof window !== 'undefined') {
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode === null || JSON.parse(isDarkMode)) {
      document.documentElement.classList.add('dark');
    }
  }
})();
