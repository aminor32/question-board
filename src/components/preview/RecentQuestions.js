import { useEffect, useState } from 'react';
import { dbService } from '../../firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import QuestionPreview from './QuestionPreview';

const RecentQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const qCollection = collection(dbService, 'question');
    onSnapshot(query(qCollection, orderBy('createdAt', 'desc')), (snapshot) => {
      const recentFiveQuestions = [...snapshot.docs.splice(0, 5)].map((docRef) => docRef.id);
      setQuestions([...recentFiveQuestions]);
    });
  }, []);

  return (
    <div>
      <section id='section'>
        <h3>방금 올라온 질문</h3>
          {questions.map((questionId) => 
            <article style={{padding: '20px'}} key={questionId}>
              <QuestionPreview questionId={questionId} />
            </article>  
          )}
      </section>
    </div>
  );
};

export default RecentQuestions;
