let categories = document.querySelector('#categories'),
    items = categories.querySelectorAll('.item');

    console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    let title = item.querySelector('h2'),
        count = item.querySelectorAll('li');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${count.length}`);
})