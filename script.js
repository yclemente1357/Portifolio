// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$(".btn").on("click", function () {
    var certificado = $(this).closest(".card").find(".card-title").text();
    var descricao = $(this).closest(".card").find(".card-text").text();
    var link = $(this).attr("href");

    //alert(`Certificado: ${certificado}\nDescrição: ${descricao}\nLink: ${link}`);
});
