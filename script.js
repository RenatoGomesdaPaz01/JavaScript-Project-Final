function toggleGroup(element) {
    var content = element.nextElementSibling;
    content.classList.toggle('hidden');
    element.classList.toggle('open');
}