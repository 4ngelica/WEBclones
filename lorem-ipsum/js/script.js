window.addEventListener('load', function() {
   
        //Fechar a navbar ao clicar na área externa (Homepage)
        document.getElementById("Homepage").onclick = function() {closeNavbar()};

        function closeNavbar() {
            if (document.getElementById('check').checked) {
                
                document.getElementById('check').click();
            }
        }
});