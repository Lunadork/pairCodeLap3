import axios from "axios"
import { useState } from "react"
import testdata from '../assets/testdate.json'
import { Sparklines, SparklinesLine } from 'react-sparklines'


export const CommitData = ({repoUrl}) => {
    const [commitTally, setCommitTally] = useState([])

    let finalList = [];
    const getCommitData = async (url) => 
    {
        try {
            const resp = await axios.get(url)
            return resp.data
        } catch (err) {
            console.log("Error with commitData.js", err)
        }
    }
    const reverseString = (str) => 
    {
        return str.split("/").reverse().join("/");

    }
    
    const getDates = async () => {
        const commitDates = []
        const commitData = await getCommitData(repoUrl)

        for (const commit of commitData) {
            const date = new Date(commit['commit']['author']['date']).toLocaleDateString(
                'en-gb', {
                day: "numeric",
                month: "numeric",
                year: "numeric"
            })
            commitDates.push(date)
        }
        const mostRecent = new Date(reverseString(commitDates[commitDates.length - 1]))
        const thirtyDaysAgo = new Date(mostRecent.setDate(mostRecent.getDate() - 30))
        const last30DaysList = []

        for (let d = 0; d < 30; d++) {
            const counterDate = new Date(thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() + 1)).toLocaleDateString('en-gb', { day: "numeric", month: "numeric", year: "numeric" })
            last30DaysList.push({ "date": counterDate, "count": 0 })
        }

        for (const d30 of last30DaysList) {
            for (const dUser of commitDates) {
                if (d30['date'] === dUser) {
                    d30['count'] += 1
                }
            }
        }

        
        for (const item of last30DaysList) {
            finalList.push(item['count'])
        }
        console.log("final list", finalList)
        setCommitTally(finalList)

    }
    // getDates()
    return (
        <>
            <Sparklines data={commitTally} style={{}} width={500} height={100} margin={10}>
                <SparklinesLine color="green" />
            </Sparklines>
        </>
    )

}
