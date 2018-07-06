export function addListItem (item) {
    return {
        type: "ADD_LIST_ITEM",
        payload: item
    }
}

export function editListItem (item) {
    return {
        type: "EDIT_LIST_ITEM",
        payload: item
    }
}

export function setCurrentItem(index) {
    return {
        type: 'SET_CURRENT_ITEM',
        payload: index
    }
}

export function deleteItem(itemId) {
    return {
        type: 'DELETE_ITEM',
        payload: itemId
    }
}

export function archiveItem(index) {
    return {
        type: 'ARCHIVE_ITEM',
        payload: index
    }
}

export function changeToAdd() {
    return {
        type: 'CHANGE_TO_ADD'
    }
}

export function changeToEdit(itemId) {
    return {
        type: 'CHANGE_TO_EDIT',
        payload: itemId
    }
}
