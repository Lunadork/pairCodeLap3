import axios from "axios"
import testdata from '../assets/testdate.json'

export const CommitData = ({repoUrl}) => {

    const getCommitData = async () => {
        try{
            const resp = await axios.get(repoUrl)
            return resp.data
        } catch (err) {
            console.log("Error with commitData.js", err)
        }
    }

    const getDates = () => {
        const commitDates = []
        let currentDate = ''
        for (const commit of testdata) {
            const date = new Date(commit['commit']['author']['date']).toLocaleDateString(
                'en-gb', {
                day: "numeric",
                month: "numeric",
                year: "numeric"
            })
            commitDates.push(date)
            

        }
        console.log(commitDates)
    }
    getDates()
    


}
