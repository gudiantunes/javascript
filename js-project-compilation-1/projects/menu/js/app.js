const wrapper = document.querySelector('#food-wrapper')

const catBtns = document.querySelectorAll('.cat-btn');

catBtns.forEach( btn => {
    btn.addEventListener('click', event => {
        filterCategory(event.target);
    })
})

const allFoods = [];

showFood()

function filterCategory(btn) {
    const cat = btn.id.replace('cat-', '');
    allFoods.forEach(food => {
        food.classList.add('hide');

        if (cat === 'all') {
            food.classList.remove('hide');
        } else if (food.classList.contains(cat)) {
            food.classList.remove('hide');
        }
    })   
}

async function loadFood() {
    try {
        const response = await fetch('./database/food.json');
        const data = await response.json();
        return data;
    } catch(err) {
        console.log('file not found');
    }
}

async function showFood() {
    const allFood = await loadFood();
    allFood.forEach(food => {
        console.log(food);
        const newFood = spawFood(food);
        wrapper.append(newFood);
        allFoods.push(newFood);
    });
}

function spawFood(food) {
    const foodName = document.createElement('h2');
    foodName.classList.add('food-name');
    foodName.textContent = food.title;

    
    const foodPrice = document.createElement('h2');
    foodPrice.classList.add('food-price');
    foodPrice.textContent = `$${food.price}`;

    const foodHeader = document.createElement('div');
    foodHeader.classList.add('food-header');
    foodHeader.append(foodName);
    foodHeader.append(foodPrice);

    const foodDesc = document.createElement('p');
    foodDesc.classList.add('food-desc');
    foodDesc.textContent = food.desc;

    const foodImg = document.createElement('div');
    foodImg.classList.add('food-img');
    foodImg.style.backgroundImage = `url(${food.img})`;

    const foodInfo = document.createElement('div');
    foodInfo.classList.add('food-info');
    foodInfo.append(foodHeader);
    foodInfo.append(foodDesc);

    const foodArticle = document.createElement('article');
    foodArticle.classList.add('food');
    foodArticle.classList.add(food.category);
    foodArticle.append(foodImg);
    foodArticle.append(foodInfo);

    return foodArticle;
}
