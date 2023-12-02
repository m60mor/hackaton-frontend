export function fetchProductPageData(url: string) {
    // const urlFragment = name.toLowerCase().replace(/\s/g, '-');
    // const sanitizedUrlFragment = urlFragment.replace(/[^a-z0-9-]/g, '').replace("kabel ", "").replace("przewód ", "")
    // const folder = sanitizedUrlFragment.slice(-4) === '1-kv' ? 'kable-1-kv' : 'przewody-instalacyjne'
    // const url = `niskie-napiecie/${folder}/${sanitizedUrlFragment}`;
    console.log(fetch(`https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/${url}/`))
    return 
}