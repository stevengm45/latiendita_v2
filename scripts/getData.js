// consumir la url

export const getData = async(url) => {
    const resp = await fetch(url)
    const data = await resp.json()
    return data
}