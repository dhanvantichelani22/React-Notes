// import React,{useState} from "react";

// // Generte an array of 40 counties, in an array

// const countries  = [
//     "India", "United States", "China", "Brazil", "Russia", 
//     "Australia", "Canada", "Germany", "United Kingdom", "France", 
//     "Italy", "Spain", "Mexico", "Japan", "South Korea", 
//     "Indonesia", "Saudi Arabia", "Turkey", "South Africa", "Egypt", 
//     "Argentina", "Sweden", "Switzerland", "Netherlands", "Belgium", 
//     "Poland", "Ukraine", "Greece", "Portugal", "Austria", 
//     "Norway", "Denmark", "Finland", "Ireland", "New Zealand", 
//     "Singapore", "Malaysia", "Vietnam", "Chile", "Czech Republic", 
//     "Philippines", "Thailand", "Israel", "Pakistan", "Bangladesh", 
//     "Romania", "Nigeria", "Colombia", "Venezuela", "Peru", 
//     "Hungary", "Jordan", "Kenya", "Croatia", "Slovenia", 
//     "Estonia", "Iceland", "Latvia", "Lithuania", "Luxembourg", 
//     "Slovakia", "Sri Lanka", "Nepal", "Qatar", "Oman", 
//     "Lebanon", "Cyprus", "Kuwait", "Bahrain", "Fiji", 
//     "Armenia", "Mauritius", "Malta", "Jamaica", "Panama", 
//     "Uruguay", "Ecuador", "Costa Rica", "Bolivia", "El Salvador", 
//     "Honduras", "Paraguay", "Nicaragua", "Guatemala", "Haiti"
// ]



// const LiveSearch = () => {
//     const [searchTerm, setSearchTerm] = useState("");


//     const filterCountries = () => {
//           const filteredCountries = countries.filter((country) =>  country.toLowerCase().includes(searchTerm.toLowerCase())==true)
//             console.log(filteredCountries)
//     }
    
//         return(
//             <div>
//                  <input type="text" placeholder="" 
//                     onChange={(event) => setSearchTerm(event.target.value)}
//                     value={searchTerm}
//                  />
//                  <button onClick={filterCountries}>Search</button>


//                <div className="countries">
//                  {
//                         countries.map((country) => (
//                             <p>{country}</p>
//                         ))
//                  }
//                  </div>
//             </div>
//         )
// }

// export default LiveSearch;
// ------------------------
import React,{useEffect, useState} from "react";

// Generte an array of 40 counties, in an array

const countries  = [
    "India", "United States", "China", "Brazil", "Russia", 
    "Australia", "Canada", "Germany", "United Kingdom", "France", 
    "Italy", "Spain", "Mexico", "Japan", "South Korea", 
    "Indonesia", "Saudi Arabia", "Turkey", "South Africa", "Egypt", 
    "Argentina", "Sweden", "Switzerland", "Netherlands", "Belgium", 
    "Poland", "Ukraine", "Greece", "Portugal", "Austria", 
    "Norway", "Denmark", "Finland", "Ireland", "New Zealand", 
    "Singapore", "Malaysia", "Vietnam", "Chile", "Czech Republic", 
    "Philippines", "Thailand", "Israel", "Pakistan", "Bangladesh", 
    "Romania", "Nigeria", "Colombia", "Venezuela", "Peru", 
    "Hungary", "Jordan", "Kenya", "Croatia", "Slovenia", 
    "Estonia", "Iceland", "Latvia", "Lithuania", "Luxembourg", 
    "Slovakia", "Sri Lanka", "Nepal", "Qatar", "Oman", 
    "Lebanon", "Cyprus", "Kuwait", "Bahrain", "Fiji", 
    "Armenia", "Mauritius", "Malta", "Jamaica", "Panama", 
    "Uruguay", "Ecuador", "Costa Rica", "Bolivia", "El Salvador", 
    "Honduras", "Paraguay", "Nicaragua", "Guatemala", "Haiti"
]

const LiveSearch = () => {
    let [search, setSearch] = useState("");
    let [filteredCountries, setFilteredCountries] = useState(countries);
     
    console.log("filtered countries", filteredCountries)
/// value of FilteredCountries vary and value of country will remain same
    useEffect(() => {
        //countries.filter ->for backspace we do it will show all country
        search==""? setFilteredCountries(countries) :
        (setFilteredCountries(countries.filter((country)=>  country.toLowerCase().includes(search.toLowerCase()))))
    }, [search])

    // function implementSubmit() {
        
    // }
    // include=> to check if this country is present or not 
    // const filterCountries = () => {
    //       let x = countries.filter((country) =>  country.toLowerCase().includes(searchTerm.toLowerCase())==true)
    //       setFilteredCountries(x)


    return(
        <div>
            
            <input type="text" placeholder="Search Country" 
            value={search} onChange={(e) => setSearch(e.target.value)}
            />
            {/* <button onClick={implementSubmit}>Submit</button> */}



        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
        }}>
            {
                filteredCountries.map((country) => (
                    <p style={{
                        width: "100px",
                        border: "1px solid black",
                        margin: "5px",
                        padding: "5px",
                        textAlign: "center",
                        backgroundColor: "lightgray",
                    }}>{country}</p>
                ))
            }
        </div>
    </div>
    )
}

export default LiveSearch;