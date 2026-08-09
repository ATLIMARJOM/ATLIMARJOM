export const handleScrollTo = (e, targetId) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  if (targetId === 'inicio') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
