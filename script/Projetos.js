const pinneds = new Set([1115378144, 1113897194, 1110544851, 1158191786]) // projetos marcados no github

// busca 100 repositórios do github
async function getRepositories() {
    try {
        const response = await fetch("https://api.github.com/users/odavirocha/repos?per_page=100")

        if (!response.ok) {
            throw new Error("Erro de conexão com o github!")
        }

        return response.json()
    } catch (error) {
        console.error("Erro ao buscar os repositórios.")
    }
}

// filtra os projetos pelos marcados
async function getPinneds() {
    let data = await getRepositories()
    const result = data.filter(item => pinneds.has(item.id))
    result.forEach((repository, index) => {
        // cria uma guia com o repositório aberto
        document.querySelector(`#card-projetos-0${index}`).href = `${repository.html_url}` 
        document.querySelector(`#card-projetos-0${index}`).target = '_blank'
        
        // popula os campos do card
        document.querySelector(`#card-projetos-0${index} .projetos-card-img`).src = `assets/${repository.id}.png`
        document.querySelector(`#name-projetos-card-0${index}`).textContent = repository.name
        document.querySelector(`#description-projetos-card-0${index}`).textContent = repository.description
    })
}

getPinneds()