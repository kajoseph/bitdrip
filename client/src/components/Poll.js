import { For, createState } from 'solid-js';
import { useFeed } from '../contexts/feed'
import { useUser } from '../contexts/user';
import '../styles/poll.scss';
import { Button } from './Button';
import { Icon } from './Icon';

export const Poll = ({ poll }) => {
  const [_, { submitVote }] = useFeed();
  const [{ data: user }] = useUser();

  const [state, setState] = createState({});

  const selectOption = (val) => {
    setState('selectedOption', val.target.id);
  }

  const calcPercent = (num) => {
    return ((num / poll.totalVotes) * 100).toFixed(0);
  }

  return (
    <div class='poll'>
      <div class='flex-column justify-content-start'>
        <div class='question'>{poll.question}</div>
        <div class='tools'>
          {user.id === poll.author.id &&
            <Button class='edit' type='button' to={`poll/edit?id=${poll.id}`}>
              <div><Icon icon='edit'/></div>
            </Button>}
        </div>
        {!poll.userVoted &&
          <div class='options'>
            <div class='justify-content-start flex-11a'></div>
            <div class='justify-content-center flex-column'>
              <For each={poll.options}>
                {(option, i) => 
                  <div class='option'>
                    <div class=''>
                      <div class='option-input'><input type='radio' onClick={selectOption} id={option.id} checked={option.id === state.selectedOption} /></div>
                      <div class='option-text'>{option.answer}</div>
                    </div>
                  </div>
                }
              </For>
            </div>
            <div class='justify-content-end flex-11a'></div>
          </div>
        }

        {poll.userVoted &&
          <div class='options'>
            <div class='justify-content-start flex-column width-100'>
              <For each={poll.options}>
                {(option, i) => 
                  <div class='option'>          
                    <div class='option-answer-text' style={`${option.userVote && 'color: green;'}`}>{option.answer}</div>
                    <div class='option-answer-spread'>
                      <div style={`width: ${calcPercent(option.num)}%;`} class='result-bar'>
                        {`${option.num}  (${calcPercent(option.num)}%)`}
                      </div>
                    </div>
                  </div>
                }
              </For>
            </div>
          </div>
        }
      </div>
      {poll.userVoted ? 
        <h3 class='pad-t-20'>Thank you for your vote</h3>
        :
        <Button style='margin-top: 2rem;' type='button' onClick={() => submitVote(poll.id, state.selectedOption)}>Vote!</Button>
      }
    </div>
  )
}