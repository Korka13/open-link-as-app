const input = document.getElementById('input');
const opener = document.getElementById('opener');

const openWindowApp = () => window.open(input.value, input.value, "location=no,resizable=yes,toolbar=no,scrollbars=no,menubar=no,status=no,directories=no,width=1200,height=600,left=100,top=100");

opener.addEventListener('click', openWindowApp);
input.addEventListener('keypress', (e) => {
    const key = 'which' in e ? e.which : e.keyCode;
    if (key === 13){
        openWindowApp()
    }
})