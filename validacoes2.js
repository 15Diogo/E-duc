function gerarPDF2(){
    var element = document.getElementById( 'body');

    htm2pdf().from(element).save();
    }