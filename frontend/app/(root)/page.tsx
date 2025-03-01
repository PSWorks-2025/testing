import Link from 'next/link';
import { db } from '@/lib/db';
import { cn } from '@/lib/utils';
import { AssessmentCard } from '@/components/assessment-card';
import { ContentSection } from '@/components/content-section';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading
} from '@/components/page-header';
import { ActionButton } from '@/components/test-exam/action-button';
import { Button, buttonVariants } from '@/components/ui/button';

const RootPage = async () => {
  // const assessments = await db.assessment.findMany();
  const assessments = [
    {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      bookName: 'IELTS Academic Test 1',
      imageCover: '/vercel.svg',
      name: 'IELTS Academic Test 1',
      totalQuestions: 40,
      duration: 60,
      isPublic: true,
      sectionType: 'READING'
    },
    {
      id: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
      bookName: 'IELTS Academic Test 2',
      imageCover: '/next.svg',
      name: 'IELTS Academic Test 2',
      totalQuestions: 40,
      duration: 60,
      isPublic: true,
      sectionType: 'LISTENING'
    },
    {
      id: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
      bookName: 'IELTS Academic Test 3',
      imageCover: '/next.svg',
      name: 'IELTS Academic Test 3',
      totalQuestions: 40,
      duration: 60,
      isPublic: true,
      // sectionType: 'WRITING',
      sectionType: {
        questions: ['Q1', 'Q1', 'Q1', 'Q1', 'Q1', 'Q1', 'Q1', 'Q1', 'Q1'],
        parts: ['P1', 'P1', 'P1', 'P1', 'P1', 'P1', 'P1', 'P1', 'P1']
      }
      //     SectionType @default(READING)
      // questions   Question[]
      // parts       Part[]
      // result      Result?

      //       model Part {
      //   id        String   @id @default(cuid())
      //   createdAt DateTime @default(now())
      //   updatedAt DateTime @default(now()) @updatedAt

      //   title       String
      //   description String
      //   order       Int

      //   questions      Question[]
      //   assessmentId   String
      //   assessment     Assessment      @relation(fields: [assessmentId], references: [id], onDelete: Cascade)
      //   questionGroups QuestionGroup[]
      //   passage        Passage?
      // }

      //       model Question {
      //   id        String   @id @default(cuid())
      //   createdAt DateTime @default(now())
      //   updatedAt DateTime @default(now()) @updatedAt

      //   questionNumber Int
      //   correctAnswer  String
      //   explain        String?
      //   respond        String?

      //   questionGroupId String
      //   questionGroup   QuestionGroup @relation(fields: [questionGroupId], references: [id], onDelete: Cascade)
      //   partId          String
      //   part            Part          @relation(fields: [partId], references: [id])
      //   assessmentId    String
      //   assessment      Assessment    @relation(fields: [assessmentId], references: [id])

      //   completionId   String?
      //   completion     Completion?                @relation(fields: [completionId], references: [id])
      //   multiOne       MultipleChoiceOneAnswer?
      //   multiMore      MultipleChoiceMoreAnswers?
      //   matchingChoice MatchingChoice?
      //   identifyInfo   IdentifyingInformation?

      //   @@unique([assessmentId, questionNumber])
      // }
    }
  ];
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/" className={cn(buttonVariants())}>
            Test Now
          </Link>
          <ActionButton
            actionType="create"
            editType="createAssessment"
            data={{}}
          >
            <div className={buttonVariants({ variant: 'outline' })}>
              Create Now
            </div>
          </ActionButton>
        </PageActions>
      </PageHeader>

      <ContentSection
        title="Latest IELTS test releases"
        description="Description"
        href="/"
        linkText="View all test"
        className="pt-8 md:pt-10 lg:pt-12"
      >
        {assessments.map(
          (assessment) => (
            // assessment.isPublic && (
            <AssessmentCard key={assessment.id} assessment={assessment} />
          )
          // )
        )}
      </ContentSection>
    </div>
  );
};
export default RootPage;
