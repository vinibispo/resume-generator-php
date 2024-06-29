function addExperience() {
  const container = document.getElementById('experiences')
  const newExperience = document.createElement('div')
  newExperience.classList.add('experience', 'mb-3') 
  const inputs = [
    {
      label: 'Data Início',
      type: 'date',
      name: 'start',
      colClass: 'col-md-3'
    },
    {
      label: 'Data Fim',
      type: 'date',
      name: 'end',
      colClass: 'col-md-3'
    },
    {
      label: 'Empresa',
      type: 'text',
      name: 'company',
      colClass: 'col-md-4'
    },
    {
      label: 'Descrição',
      type: 'textarea',
      name: 'description',
      colClass: 'col-md-2'
    }
  ]
  const row = document.createElement('div')
  row.classList.add('row')
  for (const inputRecord of inputs) {
    const startGroup = document.createElement('div')
    startGroup.classList.add(inputRecord.colClass, 'form-group')
    const label = document.createElement('label')
    label.htmlFor = inputRecord.name
    label.classList.add('form-label')
    label.textContent = inputRecord.label
    let input
    if (inputRecord.type == 'textarea') {
      input = document.createElement('textarea')
    } else {
      input = document.createElement('input')
    }
    input.type = inputRecord.type
    input.name = `experience[][${inputRecord.name}]`
    input.classList.add('form-control')
    startGroup.appendChild(label)
    startGroup.appendChild(input)
    row.appendChild(startGroup)
    newExperience.appendChild(row)
  }

  const button = document.createElement('button')
  button.classList.add('btn', 'btn-danger', 'remove-experience')
  button.textContent = '-'

  newExperience.appendChild(button)
  
  container.appendChild(newExperience)
  button.onclick = (_) => removeField(button)
}

function addReference() {
  const container = document.getElementById('references')
  const newReference = document.createElement('div')
  newReference.classList.add('reference', 'mb-3') 
  const inputs = [
    {
      label: 'Nome',
      type: 'text',
      name: 'name',
      colClass: 'col-md-8'
    },
    {
      label: 'Comentário',
      type: 'textarea',
      name: 'comment',
      colClass: 'col-md-6'
    }
  ]
  const row = document.createElement('div')
  row.classList.add('row')
  for (const inputRecord of inputs) {
    const startGroup = document.createElement('div')
    startGroup.classList.add(inputRecord.colClass, 'form-group')
    const label = document.createElement('label')
    label.htmlFor = inputRecord.name
    label.classList.add('form-label')
    label.textContent = inputRecord.label
    let input
    if (inputRecord.type == 'textarea') {
      input = document.createElement('textarea')
    } else {
      input = document.createElement('input')
    }
    input.type = inputRecord.type
    input.name = `reference[][${inputRecord.name}]`
    input.classList.add('form-control')
    startGroup.appendChild(label)
    startGroup.appendChild(input)
    row.appendChild(startGroup)
    newReference.appendChild(row)
  }

  const button = document.createElement('button')
  button.classList.add('btn', 'btn-danger', 'remove-experience')
  button.textContent = '-'

  newReference.appendChild(button)
  
  container.appendChild(newReference)
  button.onclick = (e) => removeField(button)
}

function removeField(button) {
  button.parentNode.remove()
}

function generatePdf(event) {
  event.preventDefault()
  const formData = new FormData(event.target)

  const newWindow = window.open('../resume.html', '_blank')
  newWindow.onload = () => {
    const nameTag = newWindow.document.querySelector('#name')
    const bornDateTag = newWindow.document.querySelector('#born-date')
    const experienceUl = newWindow.document.querySelector('ul#experience-list')
    const referencesUrl = newWindow.document.querySelector('ul#reference-list')

    nameTag.textContent = formData.get('name')
    bornDateTag.textContent = `Data de Nascimento: ${formData.get('born_date')}`




    newWindow.print()
  }
}
