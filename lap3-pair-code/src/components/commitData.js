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

    // const getDates = () => {
    //     for (commit of testdata) {
    //         console.log(commit)
    //     }
    // }
    // getDates()


}