function toggleMenu() {
    var ele = document.getElementsByName('flex');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == 'conainerProperty') {
                document.querySelector('.containerProperty').classList.add('show');
                document.querySelector('.itemProperty').classList.remove('show');
            } else {
                document.querySelector('.containerProperty').classList.remove('show');
                document.querySelector('.itemProperty').classList.add('show');
            }
        }
    }
}

function updateProp() {
    removeFlexClasses();
    document.querySelector('.flexContainer').classList.add('flexProp-' + event.currentTarget.value);
}

function removeFlexClasses() {
    var classLists = document.querySelector('.flexContainer').classList;
    var removableClasses = []
    classLists.forEach(currentClass => {
        if (currentClass.indexOf('flexProp-') != -1) {
            removableClasses.push(currentClass);
        }
    });
    removableClasses.forEach(currentClass => {
        document.querySelector('.flexContainer').classList.remove(currentClass);
    });
}

function updateFlexFlow() {
    removeFlexClasses();
    var wrapValue = document.querySelector('#wrapDrpDwn').value;
    var directionValue = document.querySelector('#directionDrpDwn').value;
    var flexContainer = document.querySelector('.flexContainer');
    if (directionValue.indexOf('column') != -1) {
        document.querySelector('.flexContainer').classList.add('flexProp-width300px');
    } else {
        document.querySelector('.flexContainer').classList.add('flexProp-height300px');
    }
    flexContainer.style.flexFlow = directionValue + ' ' + wrapValue;
}