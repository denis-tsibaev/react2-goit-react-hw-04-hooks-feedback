import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FeedbackButton from './components/FeedbackButton';
import Notification from './components/Notification';
import Section from './components/Section';
import StatisticList from './components/StatisticList';

const App = () => {
    const [goodFeedback, setGoodFeedback] = useState(0);
    const [neutralFeedback, setNeutralFeedback] = useState(0);
    const [badFeedback, setBadFeedback] = useState(0);

    const increaseFeedback = event => {
        const { name } = event.target;
        // console.log(name);

        switch (name) {
            case 'good':
                toast.success('you left GOOD feedback 😃');
                setGoodFeedback(prevState => prevState + 1);
                break;
            case 'neutral':
                toast.info('you left NEUTRAL feedback 😐');
                setNeutralFeedback(prevState => prevState + 1);
                break;
            case 'bad':
                toast.error('you left BAD feedback 😞');
                setBadFeedback(prevState => prevState + 1);
                break;
            default:
                break;
        }
    };

    const countTotalFeedbacks = () =>
        goodFeedback + neutralFeedback + badFeedback;

    const countPositiveFeedbackPercentage = () =>
        ((goodFeedback / countTotalFeedbacks()) * 100).toFixed(0);

    const feedbackOptions = ['good', 'neutral', 'bad'];
    const stateObj = { goodFeedback, neutralFeedback, badFeedback };

    return (
        <>
            <Section title="Please, leave feedback">
                <FeedbackButton
                    onIncreaseFeedback={increaseFeedback}
                    options={feedbackOptions}
                />
            </Section>
            <Section title="Statistic">
                {countTotalFeedbacks() === 0 ? (
                    <Notification message="No feedback given" />
                ) : (
                    <StatisticList
                        total={countTotalFeedbacks()}
                        positive={countPositiveFeedbackPercentage()}
                        state={stateObj}
                    />
                )}
            </Section>
            <ToastContainer autoClose={2000} />
        </>
    );
};

export default App;

// export default class App extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     };

//     increaseFeedback = event => {
//         const { name } = event.target;
//         console.log(name);

//         switch (name) {
//             case 'good':
//                 toast.success('you left GOOD feedback 😃');
//                 break;
//             case 'neutral':
//                 toast.info('you left NEUTRAL feedback 😐');
//                 break;
//             case 'bad':
//                 toast.error('you left BAD feedback 😞');
//                 break;
//             default:
//                 break;
//         }

//         this.setState(prevState => {
//             return { [name]: prevState[name] + 1 };
//         });
//     };

//     countTotalFeedbacks = () => {
//         const stateValues = Object.values(this.state);
//         return stateValues.reduce((acc, value) => acc + value, 0);
//     };

//     countPositiveFeedbackPercentage = () => {
//         return ((this.state.good / this.countTotalFeedbacks()) * 100).toFixed(
//             0,
//         );
//     };

//     render() {
//         const feedbackOptions = Object.keys(this.state);
//         const total = this.countTotalFeedbacks();
//         const positive = this.countPositiveFeedbackPercentage();
//         const stateObj = this.state;

//         return (
//             <>
//                 <Section title="Please, leave feedback">
//                     <FeedbackButton
//                         onIncreaseFeedback={this.increaseFeedback}
//                         options={feedbackOptions}
//                     />
//                 </Section>
//                 <Section title="Statistic">
//                     {total === 0 ? (
//                         <Notification message="No feedback given" />
//                     ) : (
//                         <StatisticList
//                             total={total}
//                             positive={positive}
//                             state={stateObj}
//                         />
//                     )}
//                 </Section>
//                 <ToastContainer autoClose={2000} />
//             </>
//         );
//     }
// }
