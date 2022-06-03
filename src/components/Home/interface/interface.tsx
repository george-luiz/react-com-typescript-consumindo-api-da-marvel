export interface personagensProps {
    comics: {
        items: [
            {
                name: string,
            }
        ]
    }
    id: number | null,
    name: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string,
    },
    stories: {
        items: [
            {
                resourceURI: string,
                name: string,
                type: string,
            }
        ]
    }
}