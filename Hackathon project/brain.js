function changeColor(event)
{
    document.querySelectorAll('div.active').forEach(function(item)
    {
        item.classList.remove('active')
    })
    event.target.classList.add('active')
}