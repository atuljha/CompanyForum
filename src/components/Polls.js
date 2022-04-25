import { Button } from "@material-ui/core"
import { PollSharp } from "@material-ui/icons"
import React from "react"
import Poll from "react-polls"
import "./Polls.css"


export default function Polls(){

const pollQuestion1 = 'Are you interested in working from Home?'

const pollQuestion2 = 'Is this forum useful?'

const [pollAnswers, setPollAnswers] = React.useState(
    [
        { option: 'Yes', votes: 8 },
        { option: 'No', votes: 2 },
        {option: 'May Be', votes: 3}
      ]
)




function handleVote(voteAnswer){

   const newAnswers = pollAnswers.map(answer=>{
        if(answer.option === voteAnswer){
            answer.votes++
        }
        return answer
    })

    setPollAnswers(newAnswers)
}

return (
    <div className="poll">
      <div>
      <h2 className="poll__headerText"> Polls <span className="poll__headerText" ><PollSharp  fontSize="large" /></span></h2>
      
      </div>
      <Button className="poll__button" variant="outlined" fullWidth> Create New Poll</Button>
      <Poll question={pollQuestion1} answers={pollAnswers} onVote={handleVote} noStorage = {true}   />
      <Poll question={pollQuestion2} answers={pollAnswers} onVote={handleVote} noStorage = {true} align="right" theme="purple"  />
    </div>
  )
}