const link = document.getElementById('link');
const opener = document.getElementById('opener');

const openWindowApp = () => window.open(link.value, link.value, "location=no,resizable=yes,toolbar=no,scrollbars=no,menubar=no,status=no,directories=no,width=1200,height=600,left=100,top=100");

opener.addEventListener('click', openWindowApp);