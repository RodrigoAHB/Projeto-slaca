const verMais = document.querySelector('.read-more');
const verMenos = document.querySelector('.read-less');
const text = document.querySelector('.text');
const resumoLess = document.querySelector('.resumo-content-less');
const resumoMore = document.querySelector('.resumo-content-more');
const resumoContainer = document.querySelector('.resumo-container');
const sideNav = document.querySelector('.side-nav');
const disContainerClosed = document.querySelector('.dis-container-closed');
const createTopic = document.querySelector('.create-topic');
const disContainerOpen = document.querySelector('.dis-container-open');
const send = document.querySelector('.send');
const footer = document.querySelector('#footer');
const subjectCard = document.querySelector('.subject-card');
const disContainerSent = document.querySelector('.dis-container-sent');
const createNewTopic = document.querySelector('.new-topic-btn');

// Event Listeners
verMais.addEventListener('click', readMore);
verMenos.addEventListener('click', readLess);
createTopic.addEventListener('click', openCreateTopic);
send.addEventListener('click', sendTopic);
createNewTopic.addEventListener('click', createTopicNew);

//Functions
function readMore () {
    resumoLess.style.display = 'none';
    resumoMore.style.display = 'block';
    resumoContainer.style.height = '490px';
    disContainerClosed.style.top = '1148px';
    disContainerOpen.style.top = '1148px';
    disContainerSent.style.top = '1148px'
    footer.style.bottom = '-113vh';
    sideNav.style.height = '213%';
    if (disContainerOpen.style.display === 'block'){
        footer.style.bottom = '-120vh';
        sideNav.style.height = '220%';
    } else if (disContainerSent.style.display ==='block') {
        footer.style.bottom = '-128vh';
        sideNav.style.height = '228%';
    }  
}

function readLess () {
    resumoLess.style.display = 'block';
    resumoMore.style.display = 'none';
    resumoContainer.style.height = '187px';
    disContainerClosed.style.top = '845px';
    disContainerOpen.style.top = '845px';
    if(disContainerOpen.style.display === 'block'){
        footer.style.bottom = '-88vh';
        sideNav.style.height = '188%';
    } else if (disContainerSent.style.display ==='block') {
        footer.style.bottom = '-95vh';
        sideNav.style.height = '195%';
        disContainerSent.style.top = '845px';
    }
}

function openCreateTopic() {
    disContainerClosed.style.display = 'none';
    disContainerOpen.style.display = 'block'
    if (disContainerClosed.style.top === '1148px') {
        footer.style.bottom = '-120vh';
        sideNav.style.height = '220%';
    } else {
        footer.style.bottom = '-88vh';
        sideNav.style.height = '188%';
    }
}

function sendTopic() {
    disContainerClosed.style.display = 'none';
    disContainerOpen.style.display = 'none';
    disContainerSent.style.display = 'block';
    if (resumoContainer.style.height === '490px') {
        footer.style.bottom = '-128vh';
        sideNav.style.height = '228%';
    } else {
        footer.style.bottom = '-95vh';
        sideNav.style.height = '195%';
        disContainerSent.style.top = '845px';
    }
}

function createTopicNew() {
    disContainerSent.style.display = 'none'
    disContainerClosed.style.display = 'none';
    disContainerOpen.style.display = 'block';
    if (resumoContainer.style.height === '490px') {
        footer.style.bottom = '-120vh';
        sideNav.style.height = '220%';
    } else {
        footer.style.bottom = '-87vh';
        sideNav.style.height = '188%';
    }
}