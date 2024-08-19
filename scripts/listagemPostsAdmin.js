function deletar(idPost) {
    const cloudPosts = JSON.parse(localStorage.getItem('posts'))
    const filterPosts = cloudPosts.filter((item) => item.id !== idPost)

    localStorage.setItem('posts', JSON.stringify(filterPosts))

    document.getElementById('table').innerHTML = ''
    carregarDados()
}

function carregarDados() {
    const posts = JSON.parse(localStorage.getItem('posts'))

    posts.forEach((post) => {
        const tr = document.createElement('tr')

        const titleTd = document.createElement('td')
        titleTd.innerText = post.title
        tr.append(titleTd)

        const authorTd = document.createElement('td')
        authorTd.innerText = 'Admin'
        tr.append(authorTd)

        const descriptionTd = document.createElement('td')
        descriptionTd.innerText = post.description
        tr.append(descriptionTd)

        const categoryTd = document.createElement('td')
        categoryTd.innerText = post.category
        tr.append(categoryTd)
    
        const postTimeTd = document.createElement('td')
        postTimeTd.innerText = post.postTime
        tr.append(postTimeTd)

        const deleteTd = document.createElement('td')
        deleteTd.innerText = 'X'
        deleteTd.classList.add('delete')
        deleteTd.addEventListener('click', function() {
            deletar(post.id)
        }
        )

        tr.append(deleteTd)

        document.getElementById('table').append(tr)
    });
}

document.addEventListener('DOMContentLoaded', carregarDados)