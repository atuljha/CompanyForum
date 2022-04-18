import React from "react"
import Poll from "react-polls"


export default function Polls(){

const pollQuestion = 'Is this forum useful?'

const [pollAnswers, setPollAnswers] = React.useState(
    [
        { option: 'Yes', votes: 8 },
        { option: 'No', votes: 2 }
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
    <div>
      <Poll question={pollQuestion} answers={pollAnswers} onVote={handleVote} noStorage = {true}   />
      <Poll question={pollQuestion} answers={pollAnswers} onVote={handleVote} noStorage = {true} align="right" theme="purple"  />
    </div>
  )
}