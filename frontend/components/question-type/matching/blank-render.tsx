import { DragEvent, useContext, useState } from 'react';
import { DndContext } from '@/global/dnd-context';
import { ExamContext } from '@/global/exam-context';
import { useDnd } from '@/global/use-dnd';
import { useExamHandler } from '@/global/use-exam-handler';
import { cn } from '@/lib/utils';

export function MatchingBlankRender({
  questionNumber
}: {
  questionNumber: number;
}) {
  const { userAnswers, selectedPart, questionRefs } = useContext(ExamContext);
  const { handleAnswerChange } = useExamHandler();

  const { handleDragOver, handleDragLeave, handleDrop, handleDragStart } =
    useDnd();
  const { questionId } = useContext(DndContext);
  const { setCurrentRef, currentRef } = useContext(ExamContext);

  const question = selectedPart?.questions.find(
    (question) => question.questionNumber === questionNumber
  );
  if (!question) {
    return null;
  }
  const answer = userAnswers.find(
    (prev) => prev.questionNumber === questionNumber
  );

  return (
    <>
      {answer && answer.type === 'MATCHING' && answer.content ? (
        <div
          onDrop={(event) => {
            console.log(answer, questionNumber, 'bruh');
            handleAnswerChange({
              questionNumber: questionNumber,
              type: 'MATCHING',
              content: 'bruh',
              matchingChoiceId: 'mc1'
            });
            handleDrop({
              event,
              quesNum: question.questionNumber,
              type: 'question'
            });
          }}
          onDragStart={() =>
            handleDragStart(question.questionGroupId, answer.matchingChoiceId)
          }
          onDragOver={(event) =>
            handleDragOver({ event, type: 'question', questionId: question.id })
          }
          // draggable
          onDragLeave={handleDragLeave}
          ref={questionRefs[question.questionNumber - 1]}
          className={cn(
            'border-4 bg-background border-dotted  w-full p-4',
            questionId === question.id ? 'bg-secondary' : ' '
          )}
        >
          {answer.content}
        </div>
      ) : (
        <div
          onDrop={(event) => {
            handleAnswerChange({
              questionNumber: questionNumber,
              type: 'MATCHING',
              content: 'bruh',
              matchingChoiceId: 'mc1'
            });
            handleDrop({
              event,
              quesNum: question.questionNumber,
              type: 'question'
            });
          }}
          onDragOver={(event) =>
            handleDragOver({ event, type: 'question', questionId: question.id })
          }
          onDragLeave={handleDragLeave}
          ref={questionRefs[question.questionNumber - 1]}
          className={cn(
            'border-4 border-dotted  w-full p-4',
            questionId === question.id ? 'bg-secondary' : ' ',
            currentRef === question.questionNumber - 1
              ? ' '
              : 'border-secondary'
          )}
        >
          {questionNumber}
        </div>
      )}
    </>
  );
}
