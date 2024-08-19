function toPost(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const fileInput = document.getElementById('file');

    let valid = true;

    if (!title) {
        document.getElementById('title').style.borderColor = '#717598';
        document.getElementById('title').style.borderWidth = '2px';
        document.getElementById('errorTitle').innerText = '*Título é obrigatório';
    } else {
        document.getElementById('title').style.borderColor = '';
        document.getElementById('title').style.borderWidth = '1px';
        document.getElementById('errorTitle').innerText = '';
    }

    if (!description) {
        document.getElementById('description').style.borderColor = '#717598';
        document.getElementById('description').style.borderWidth = '2px';
        document.getElementById('errorDescription').innerText = '*Descrição é obrigatória';
    } else {
        document.getElementById('description').style.borderColor = '';
        document.getElementById('description').style.borderWidth = '1px';
        document.getElementById('errorDescription').innerText = '';
    }

    if (category === "select") {
        document.getElementById('category').style.borderColor = '#717598';
        document.getElementById('category').style.borderWidth = '2px';
        document.getElementById('errorCategory').innerText = '*Espécie é obrigatória';
    } else {
        document.getElementById('category').style.borderColor = '';
        document.getElementById('errorCategory').innerText = '';
    }

    if (!file) {
        document.getElementById('errorFile').innerText = '*Arquivo é obrigatório';
    } else {
        document.getElementById('errorFile').innerText = '';
    }

    if (title && description && category && file) {
        const post = {
            id: crypto.randomUUID(),
            title,
            description,
            category,
            file: file.name,
            postTime: new Date().toLocaleDateString()
        };

        let postsSalvos = JSON.parse(localStorage.getItem('posts'));
        if (postsSalvos === null) postsSalvos = [];
        postsSalvos.push(post);
        localStorage.setItem('posts', JSON.stringify(postsSalvos));

        document.getElementById('formPost').reset();
    }
}

document.getElementById('formPost').addEventListener('submit', toPost);
