const baseURL = 'https://www.dnd5eapi.co/api/'

let testURL = `monsters/`

let content 

//data-area

const name = document.querySelector('#name')
const hp = document.querySelector('#hp')
const ca = document.querySelector('#ca')
const size = document.querySelector('#size')
const str = document.querySelector('#for')
const des = document.querySelector('#des')
const con = document.querySelector('#con')
const int = document.querySelector('#int')
const sab = document.querySelector('#sab')
const car = document.querySelector('#car')

function loadAPI() {
	document.querySelector('.ficha').classList.add('active')
	let httpRequest = new XMLHttpRequest()
	httpRequest.open('GET', baseURL + testURL + `${document.querySelector('#monster').value}/`)
	httpRequest.responseType = 'json'
	httpRequest.send()
	httpRequest.onload = () => {
		content = httpRequest.response
		name.innerHTML = content.name
		hp.innerHTML = 'HP: ' + content.hit_points
		ca.innerHTML = 'CA: ' + content.armor_class
		size.innerHTML = content.size
		str.innerHTML = content.strength
		des.innerHTML = content.dexterity
		con.innerHTML = content.constitution
		int.innerHTML = content.intelligence
		sab.innerHTML = content.wisdom
		car.innerHTML = content.charisma
	}
}

function loadOptions() {
	let httpRequest = new XMLHttpRequest()
	httpRequest.open('GET', baseURL + 'monsters/')
	httpRequest.responseType = 'json'
	httpRequest.send()
	httpRequest.onload = () => {
		let option = document.querySelector('#monster')
		let list = httpRequest.response
		list = list.results
		for(let i = 0; i < list.length; i++){
			option.innerHTML += `<option value="${list[i].index}">${list[i].name}</option>`
		}
	}
}

setTimeout(loadOptions(), 1000)