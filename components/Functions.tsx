export const donate = async (amount, chosenCountry, handlePress) => {
    const url = 'https://donate.wfp.org/1244/donation/single?campaign=1517&_ga=2.28815612.1736057396.1702065947-473231454.1702065946&_gac=1.91447784.1702068381.CjwKCAiAmsurBhBvEiwA6e-WPAXkRDjIkUyOl3iuFWjPoO70Zqa_-KZQyGzaEop2Xfr8MnDOhdC0YRoCKDMQAvD_BwE'
    await handlePress(url)
}

export const getCountry = (json) => {
    // const checked =  
    // return checked
}