import React from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

export const useCollectionItems = (collectionName) => {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        const db = getFirestore()

        const itemsCollection = collection(db, collectionName)

        getDocs(itemsCollection)
        .then((snapshot) => {
            setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
        .catch(error => console.log(error))

    }, [])

  return { items }
}