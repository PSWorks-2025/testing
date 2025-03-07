import { QuestionType, SectionType } from '@prisma/client';
import { Description } from '@radix-ui/react-toast';

export const assessments = [
  {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    bookName: 'IELTS Reading Test 1',
    imageCover: '/vercel.svg',
    name: 'IELTS Reading Test 1',
    totalQuestions: 40,
    duration: 30,
    isPublic: true,
    sectionType: SectionType.READING,
    questions: [],
    parts: [
      {
        id: 'p1',
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Part 1',
        description: 'Description for Mock Part 1',
        order: 1,
        assessmentId: 'mock-id',
        audioFile: '',
        questionGroups: [
          {
            id: 'g1',
            createdAt: new Date(),
            updatedAt: new Date(),
            title: 'Mock Group 1',
            description: 'Description for Mock Group 1',
            startQuestionNumber: 1,
            endQuestionNumber: 2,
            type: 'MULTIPLE_CHOICE_ONE_ANSWER',
            partId: 'p1',
            identifyInfoList: [],
            questions: [],
            matching: null,
            completion: null,
            multiMoreList: [],
            multiOneList: [
              {
                id: 'm1',
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Mock Multiple Choice One Answer 1',
                questionId: 'q1',
                questionGroupId: 'g1',
                choices: [
                  {
                    id: 'c1',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 1',
                    isCorrect: true,
                    order: 1,
                    explanation: 'Explanation for Choice 1',
                    multiOneId: 'm1',
                    multiMoreId: null
                  },
                  {
                    id: 'c2',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 2',
                    isCorrect: false,
                    order: 2,
                    explanation: 'Explanation for Choice 2',
                    multiOneId: 'm1',
                    multiMoreId: null
                  }
                  // Add more mock choices as needed
                ],
                question: {
                  id: 'q1',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 1,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g1',
                  partId: 'p1',
                  assessmentId: '1',
                  completionId: null
                }
              },
              {
                id: 'm2',
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Mock Multiple Choice One Answer 1',
                questionId: 'q2',
                questionGroupId: 'g2',
                choices: [
                  {
                    id: 'c3',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 1',
                    isCorrect: true,
                    order: 1,
                    explanation: 'Explanation for Choice 1',
                    multiOneId: 'm2',
                    multiMoreId: null
                  },
                  {
                    id: 'c4',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 2',
                    isCorrect: false,
                    order: 2,
                    explanation: 'Explanation for Choice 2',
                    multiOneId: 'm2',
                    multiMoreId: null
                  }
                  // Add more mock choices as needed
                ],
                question: {
                  id: 'q2',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 2,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g1',
                  partId: 'p1',
                  assessmentId: '1',
                  completionId: null
                }
              }
              // Add more mock MultipleChoiceOneAnswer as needed
            ]
          },
          {
            id: 'g2',
            createdAt: new Date(),
            updatedAt: new Date(),
            title: 'Mock Group 1',
            description: 'Description for Mock Group 1',
            startQuestionNumber: 3,
            endQuestionNumber: 4,
            type: 'IDENTIFYING_INFORMATION',
            partId: 'p1',
            identifyInfoList: [
              {
                id: 'i1',
                createdAt: new Date(),
                updatedAt: new Date(),
                title:
                  'Residents of host cities have little use for the full range of Olympic facilities.',
                choiceCorrect: 'TRUE',
                questionId: 'q3',
                questionGroupId: 'g2',
                question: {
                  id: 'q3',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 3,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g2',
                  partId: 'p1',
                  assessmentId: '1',
                  completionId: null
                }
              },
              {
                id: 'i2',
                createdAt: new Date(),
                updatedAt: new Date(),
                title:
                  '	Australians have still not paid for the construction of Olympic sports facilities.',
                choiceCorrect: 'TRUE',
                questionId: 'q4',
                questionGroupId: 'g2',
                question: {
                  id: 'q4',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 4,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g2',
                  partId: 'p1',
                  assessmentId: '1',
                  completionId: null
                }
              },
              {
                id: 'i3',
                createdAt: new Date(),
                updatedAt: new Date(),
                title:
                  '	People far beyond the host city can expect to benefit from improved infrastructure.	',
                choiceCorrect: 'TRUE',
                questionId: 'q5',
                questionGroupId: 'g2',
                question: {
                  id: 'q5',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 5,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g2',
                  partId: 'p1',
                  assessmentId: '1',
                  completionId: null
                }
              },
              {
                id: 'i4',
                createdAt: new Date(),
                updatedAt: new Date(),
                title:
                  'It is difficult for small cities to win an Olympic bid.	',
                choiceCorrect: 'TRUE',
                questionId: 'q6',
                questionGroupId: 'g2',
                question: {
                  id: 'q6',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 6,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g2',
                  partId: 'p1',
                  assessmentId: '1',
                  completionId: null
                }
              },
              {
                id: 'i5',
                createdAt: new Date(),
                updatedAt: new Date(),
                title:
                  '	When a city makes an Olympic bid, a majority of its citizens usually want it to win.	',
                choiceCorrect: 'TRUE',
                questionId: 'q7',
                questionGroupId: 'g2',
                question: {
                  id: 'q7',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 7,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g2',
                  partId: 'p1',
                  assessmentId: '1',
                  completionId: null
                }
              },
              {
                id: 'i6',
                createdAt: new Date(),
                updatedAt: new Date(),
                title:
                  'Fewer people than normal visited Greece during the run up to the Athens Olympics.	',
                choiceCorrect: 'TRUE',
                questionId: 'q8',
                questionGroupId: 'g2',
                question: {
                  id: 'q8',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 8,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g2',
                  partId: 'p1',
                  assessmentId: '1',
                  completionId: null
                }
              }
              // Add more mock identify info as needed
            ],
            questions: [],
            matching: null,
            completion: null,
            multiMoreList: [],
            multiOneList: []
          },
          {
            id: 'g3',
            createdAt: new Date(),
            updatedAt: new Date(),
            title: 'Mock Group 1',
            description: 'Description for Mock Group 1',
            startQuestionNumber: 5,
            endQuestionNumber: 6,
            type: 'MATCHING',
            partId: 'p1',
            identifyInfoList: [],
            questions: [],
            matching: {
              id: 'm1',
              createdAt: new Date(),
              updatedAt: new Date(),
              questionGroupId: 'g3',
              paragraph: 'Mock paragraph for matching',
              titleForQuestion: 'Mock title for question',
              matchingChoiceList: [
                {
                  id: 'mc1',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  content: 'Mock Matching Choice 1',
                  questionId: 'q5',
                  matchingId: 'm1'
                },
                {
                  id: 'mc2',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  content: 'Mock Matching Choice 2',
                  questionId: 'q5',
                  matchingId: 'm1'
                }
                // Add more mock matching choices as needed
              ]
            },
            completion: null,
            multiMoreList: [],
            multiOneList: []
          },
          {
            id: 'g4',
            createdAt: new Date(),
            updatedAt: new Date(),
            title: 'Mock Group 1',
            description: 'Description for Mock Group 1',
            startQuestionNumber: 7,
            endQuestionNumber: 8,
            type: 'MULTIPLE_CHOICE_MORE_ANSWERS',
            partId: 'p1',
            identifyInfoList: [],
            questions: [],
            matching: null,
            completion: null,
            multiMoreList: [
              {
                id: 'mm1',
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Mock Multiple Choice More Answer 1',
                explanation: 'Explanation for Multiple Choice More Answer 1',
                expectedAnswers: ['Answer 1', 'Answer 2'],
                questionId: 'q10',
                questionGroupId: 'g4',
                choices: [
                  {
                    id: 'c10',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 1',
                    isCorrect: true,
                    order: 1,
                    explanation: 'Explanation for Choice 1',
                    multiOneId: null,
                    multiMoreId: 'mm1'
                  },
                  {
                    id: 'c11',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 2',
                    isCorrect: false,
                    order: 2,
                    explanation: 'Explanation for Choice 2',
                    multiOneId: null,
                    multiMoreId: 'mm1'
                  }
                  // Add more mock choices as needed
                ],
                question: {
                  id: 'q1',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 7,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g4',
                  partId: 'p1',
                  assessmentId: '1',
                  completionId: null
                }
              },
              {
                id: 'mm2',
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Mock Multiple Choice More Answer 1',
                explanation: 'Explanation for Multiple Choice More Answer 1',
                expectedAnswers: ['Answer 1', 'Answer 2'],
                questionId: 'q11',
                questionGroupId: 'g4',
                choices: [
                  {
                    id: 'c12',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 1',
                    isCorrect: true,
                    order: 1,
                    explanation: 'Explanation for Choice 1',
                    multiOneId: null,
                    multiMoreId: 'mm2'
                  },
                  {
                    id: 'c13',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 2',
                    isCorrect: false,
                    order: 2,
                    explanation: 'Explanation for Choice 2',
                    multiOneId: null,
                    multiMoreId: 'mm2'
                  }
                  // Add more mock choices as needed
                ],
                question: {
                  id: 'q11',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 8,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g4',
                  partId: 'p1',
                  assessmentId: '1',
                  completionId: null
                }
              }
              // Add more mock MultipleChoiceMoreAnswer as needed
            ],
            multiOneList: []
          }
        ],
        passage: {
          id: 'passage1',
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Fair games?',
          description: 'Part 1 reading',
          image: null,
          type: 'PASSAGE_SIMPLE',
          content:
            'For seventeen days every four years the world is briefly arrested by the captivating, dizzying spectacle of athleticism, ambition, pride and celebration on display at the Summer Olympic Games. After the last weary spectators and competitors have returned home, however, host cities are often left awash in high debts and costly infrastructure maintenance. The staggering expenses involved in a successful Olympic bid are often assumed to be easily mitigated by tourist revenues and an increase in local employment, but more often than not host cities are short changed and their taxpayers for generations to come are left settling the debt.' +
            '\n\nOlympic extravagances begin with the application process. Bidding alone will set most cities back about $20 million, and while officially bidding only takes two years (for cities that make the shortlist), most cities can expect to exhaust a decade working on their bid from the moment it is initiated to the announcement of voting results from International Olympic Committee members. Aside from the financial costs of the bid alone, the process ties up real estate in prized urban locations until the outcome is known. This can cost local economies millions of dollars of lost revenue from private developers who could have made use of the land, and can also mean that particular urban quarters lose their vitality due to the vacant lots. All of this can be for nothing if a bidding city does not appease the whims of IOC members – private connections and opinions on government conduct often hold sway (Chicago’s 2012 bid is thought to have been undercut by tensions over U.S. foreign policy).' +
            '\n\nBidding costs do not compare, however, to the exorbitant bills that come with hosting the Olympic Games themselves. As is typical with large-scale, one-off projects, budgeting for the Olympics is a notoriously formidable task. Los Angelinos have only recently finished paying off their budget-breaking 1984 Olympics; Montreal is still in debt for its 1976 Games (to add insult to injury, Canada is the only host country to have failed to win a single gold medal during its own Olympics). The tradition of runaway expenses has persisted in recent years. London Olympics managers have admitted that their 2012 costs may increase ten times over their initial projections, leaving tax payers 20 billion pounds in the red.' +
            '\n\nHosting the Olympics is often understood to be an excellent way to update a city’s sporting infrastructure. The extensive demands of Olympic sports include aquatic complexes, equestrian circuits, shooting ranges, beach volleyball courts, and, of course, an 80,000 seat athletic stadium. Yet these demands are typically only necessary to accommodate a brief influx of athletes from around the world. Despite the enthusiasm many populations initially have for the development of world-class sporting complexes in their home towns, these complexes typically fall into disuse after the Olympic fervour has waned. Even Australia, home to one of the world’s most sportive populations, has left its taxpayers footing a $32 million-a-year bill for the maintenance of vacant facilities.' +
            '\n\nAnother major concern is that when civic infrastructure developments are undertaken in preparation for hosting the Olympics, these benefits accrue to a single metropolitan centre (with the exception of some outlying areas that may get some revamped sports facilities). In countries with an expansive land mass, this means vast swathes of the population miss out entirely. Furthermore, since the International Olympic Committee favours prosperous “global” centres (the United Kingdom was told, after three failed bids from its provincial cities, that only London stood any real chance at winning), the improvement of public transport, roads and communication links tends to concentrate in places already well-equipped with world-class infrastructures. Perpetually by-passing minor cities creates a cycle of disenfranchisement: these cities never get an injection of capital, they fail to become first-rate candidates, and they are constantly passed over in favour of more secure choices.' +
            '\n\nFinally, there is no guarantee that an Olympics will be a popular success. The “feel good” factor that most proponents of Olympic bids extol (and that was no doubt driving the 90 to 100 per cent approval rates of Parisians and Londoners for their cities’ respective 2012 bids) can be an elusive phenomenon, and one that is tied to that nation’s standing on the medal tables. This ephemeral thrill cannot compare to the years of disruptive construction projects and security fears that go into preparing for an Olympic Games, nor the decades of debt repayment that follow (Greece’s preparation for Athens 2004 famously deterred tourists from visiting the country due to widespread unease about congestion and disruption).' +
            '\n\nThere are feasible alternatives to the bloat, extravagance and wasteful spending that comes with a modern Olympic Games. One option is to designate a permanent host city that would be re-designed or built from scratch especially for the task. Another is to extend the duration of the Olympics so that it becomes a festival of several months. Local businesses would enjoy the extra spending and congestion would ease substantially as competitors and spectators come and go according to their specific interests. Neither the “Olympic City” nor the extended length options really get to the heart of the issue, however. Stripping away ritual and decorum in favour of concentrating on athletic rivalry would be preferable.' +
            '\n\nFailing that, the Olympics could simply be scrapped altogether. International competition could still be maintained through world championships in each discipline. Most of these events are already held on non-Olympic years anyway – the International Association of Athletics Federations, for example, has run a biennial World Athletics Championship since 1983 after members decided that using the Olympics for their championship was no longer sufficient. Events of this nature keep world-class competition alive without requiring Olympic-sized expenses.',
          partId: 'p1',
          passageHeadingList: [
            {
              id: 'heading1',
              createdAt: new Date(),
              updatedAt: new Date(),
              order: 1,
              content: 'This is a mock passage heading content.',
              title: 'Mock Heading 1',
              passageId: 'passage1'
            }
            // Add more mock passage headings as needed
          ]
        },
        questions: [
          {
            id: 'q1',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 1,
            correctAnswer: 'Answer 1',
            explain: 'Explanation for Question 1',
            respond: '',
            questionGroupId: 'g1', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q2',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 2,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g1', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q3',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 3,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g2', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q4',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 4,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g2', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q5',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 5,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g2', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q6',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 6,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g2', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q7',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 7,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g2', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q8',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 8,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g2', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q5',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 5,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g3', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q6',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 6,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g3', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q7',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 7,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g3', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q8',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 8,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g3', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          }
        ]
      },
      {
        id: 'p2',
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Part 2',
        description: 'Description for Mock Part 1',
        order: 2,
        assessmentId: 'mock-id',
        audioFile: '',
        questionGroups: [
          {
            id: 'g1',
            createdAt: new Date(),
            updatedAt: new Date(),
            title: 'Mock Group 1',
            description: 'Description for Mock Group 1',
            startQuestionNumber: 1,
            endQuestionNumber: 2,
            type: 'MULTIPLE_CHOICE_ONE_ANSWER',
            partId: 'p2',
            identifyInfoList: [],
            questions: [],
            matching: null,
            completion: null,
            multiMoreList: [],
            multiOneList: [
              {
                id: 'm1',
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Mock Multiple Choice One Answer 1',
                questionId: 'q1',
                questionGroupId: 'g1',
                choices: [
                  {
                    id: 'c1',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 1',
                    isCorrect: true,
                    order: 1,
                    explanation: 'Explanation for Choice 1',
                    multiOneId: 'm1',
                    multiMoreId: null
                  },
                  {
                    id: 'c2',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 2',
                    isCorrect: false,
                    order: 2,
                    explanation: 'Explanation for Choice 2',
                    multiOneId: 'm1',
                    multiMoreId: null
                  }
                  // Add more mock choices as needed
                ],
                question: {
                  id: 'q1',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 1,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g1',
                  partId: 'p2',
                  assessmentId: '1',
                  completionId: null
                }
              },
              {
                id: 'm2',
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Mock Multiple Choice One Answer 1',
                questionId: 'q2',
                questionGroupId: 'g2',
                choices: [
                  {
                    id: 'c3',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 1',
                    isCorrect: true,
                    order: 1,
                    explanation: 'Explanation for Choice 1',
                    multiOneId: 'm2',
                    multiMoreId: null
                  },
                  {
                    id: 'c4',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 2',
                    isCorrect: false,
                    order: 2,
                    explanation: 'Explanation for Choice 2',
                    multiOneId: 'm2',
                    multiMoreId: null
                  }
                  // Add more mock choices as needed
                ],
                question: {
                  id: 'q2',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 2,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g1',
                  partId: 'p2',
                  assessmentId: '1',
                  completionId: null
                }
              }
              // Add more mock MultipleChoiceOneAnswer as needed
            ]
          },
          {
            id: 'g2',
            createdAt: new Date(),
            updatedAt: new Date(),
            title: 'Mock Group 1',
            description: 'Description for Mock Group 1',
            startQuestionNumber: 3,
            endQuestionNumber: 4,
            type: 'IDENTIFYING_INFORMATION',
            partId: 'p2',
            identifyInfoList: [
              {
                id: 'i1',
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Mock Identify Info 1',
                choiceCorrect: 'TRUE',
                questionId: 'q3',
                questionGroupId: 'g2',
                question: {
                  id: 'q3',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 3,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g2',
                  partId: 'p2',
                  assessmentId: '1',
                  completionId: null
                }
              },
              {
                id: 'i2',
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Mock Identify Info 2',
                choiceCorrect: 'TRUE',
                questionId: 'q4',
                questionGroupId: 'g2',
                question: {
                  id: 'q4',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 4,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g2',
                  partId: 'p2',
                  assessmentId: '1',
                  completionId: null
                }
              }
              // Add more mock identify info as needed
            ],
            questions: [],
            matching: null,
            completion: null,
            multiMoreList: [],
            multiOneList: []
          },
          {
            id: 'g3',
            createdAt: new Date(),
            updatedAt: new Date(),
            title: 'Mock Group 1',
            description: 'Description for Mock Group 1',
            startQuestionNumber: 5,
            endQuestionNumber: 6,
            type: 'MATCHING',
            partId: 'p2',
            identifyInfoList: [],
            questions: [],
            matching: {
              id: 'm1',
              createdAt: new Date(),
              updatedAt: new Date(),
              questionGroupId: 'g3',
              paragraph: 'Mock paragraph for matching',
              titleForQuestion: 'Mock title for question',
              matchingChoiceList: [
                {
                  id: 'mc1',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  content: 'Mock Matching Choice 1',
                  questionId: 'q5',
                  matchingId: 'm1'
                },
                {
                  id: 'mc2',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  content: 'Mock Matching Choice 2',
                  questionId: 'q6',
                  matchingId: 'm1'
                }
              ]
            },
            completion: null,
            multiMoreList: [],
            multiOneList: []
          },
          {
            id: 'g4',
            createdAt: new Date(),
            updatedAt: new Date(),
            title: 'Mock Group 1',
            description: 'Description for Mock Group 1',
            startQuestionNumber: 7,
            endQuestionNumber: 8,
            type: 'MULTIPLE_CHOICE_MORE_ANSWERS',
            partId: 'p2',
            identifyInfoList: [],
            questions: [],
            matching: null,
            completion: null,
            multiMoreList: [
              {
                id: 'mm1',
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Mock Multiple Choice More Answer 1',
                explanation: 'Explanation for Multiple Choice More Answer 1',
                expectedAnswers: ['Answer 1', 'Answer 2'],
                questionId: 'q10',
                questionGroupId: 'g1',
                choices: [
                  {
                    id: 'c10',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 1',
                    isCorrect: true,
                    order: 1,
                    explanation: 'Explanation for Choice 1',
                    multiOneId: null,
                    multiMoreId: 'mm1'
                  },
                  {
                    id: 'c11',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 2',
                    isCorrect: false,
                    order: 2,
                    explanation: 'Explanation for Choice 2',
                    multiOneId: null,
                    multiMoreId: 'mm1'
                  }
                  // Add more mock choices as needed
                ],
                question: {
                  id: 'q1',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 7,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g4',
                  partId: 'p2',
                  assessmentId: '1',
                  completionId: null
                }
              },
              {
                id: 'mm2',
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Mock Multiple Choice More Answer 1',
                explanation: 'Explanation for Multiple Choice More Answer 1',
                expectedAnswers: ['Answer 1', 'Answer 2'],
                questionId: 'q11',
                questionGroupId: 'g1',
                choices: [
                  {
                    id: 'c12',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 1',
                    isCorrect: true,
                    order: 1,
                    explanation: 'Explanation for Choice 1',
                    multiOneId: null,
                    multiMoreId: 'mm2'
                  },
                  {
                    id: 'c13',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 2',
                    isCorrect: false,
                    order: 2,
                    explanation: 'Explanation for Choice 2',
                    multiOneId: null,
                    multiMoreId: 'mm2'
                  }
                  // Add more mock choices as needed
                ],
                question: {
                  id: 'q11',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 8,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g4',
                  partId: 'p2',
                  assessmentId: '1',
                  completionId: null
                }
              }
              // Add more mock MultipleChoiceMoreAnswer as needed
            ],
            multiOneList: []
          }
        ],
        passage: {
          id: 'passage1',
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Mock Passage',
          description: 'Description for Mock Passage',
          image: null,
          type: 'PASSAGE_SIMPLE',
          content:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut molestias laudantium vitae nisi blanditiis magnam, minus asperiores ullam facere numquam, optio impedit, veniam nam commodi consequatur nemo quos nesciunt quisquam consectetur. Accusamus delectus vitae maiores saepe quibusdam similique praesentium architecto perferendis, non nihil qui quia inventore! Non totam necessitatibus quis illo iste at quod mollitia tenetur enim molestias corrupti quia optio, ipsa eligendi provident a maxime dolore explicabo odio corporis impedit tempore. Facere nam non veniam, repellendus eaque iusto deserunt obcaecati eveniet aliquid vitae eligendi dolor odio voluptatibus repudiandae. Vero accusamus perspiciatis atque, asperiores architecto neque deserunt, harum commodi rem molestias alias eaque voluptatem error maiores facilis esse debitis at ab doloribus modi ex? Provident eaque expedita totam minus dolor sequi voluptatem sint fuga illo iste impedit porro id voluptates nihil, harum nostrum at nesciunt in maxime aspernatur! Nisi hic molestias animi porro reiciendis necessitatibus voluptatibus modi deleniti ex atque, sequi consectetur qui ea inventore repellendus. Tenetur, at quos. Amet, aliquam. Quisquam necessitatibus aliquam dolore totam enim voluptate deleniti velit unde, aspernatur eius magni non tenetur. Ipsam ducimus obcaecati sit asperiores exercitationem dolorum repellendus accusamus dolore consectetur qui! Amet neque culpa consequatur. Reprehenderit, corrupti architecto, fugiat a ab est praesentium rem vero incidunt officia unde iure? Iusto laboriosam maiores labore. Sit amet esse obcaecati doloremque quas quibusdam aut, incidunt quam. Odit nemo eveniet eum aut, eligendi ullam! Illum amet sed dignissimos dicta ex qui repellendus vitae, officiis molestiae enim nulla aliquid sint aspernatur suscipit soluta delectus cum at unde voluptatum quam tenetur est? Repudiandae minima enim fugit quis, amet quae tempore recusandae ipsam in magnam obcaecati, porro rem rerum nam! Vitae in alias nihil commodi eaque consequatur cumque at, asperiores accusamus reprehenderit delectus animi porro accusantium omnis neque? Ipsam similique cumque iusto quis tenetur eveniet ratione dolorem, itaque omnis, fugiat illum quod quidem? Repellat inventore, culpa distinctio error dolores adipisci architecto cumque debitis commodi et voluptates, velit, maiores dolorem eum dolor itaque excepturi rerum omnis! Quidem veritatis inventore, molestiae perferendis voluptas vitae porro quia temporibus laborum beatae tenetur quaerat, culpa quis nam iure sapiente rerum nihil soluta accusantium esse. Blanditiis eius ratione suscipit praesentium assumenda veniam nobis in eligendi aspernatur laudantium voluptate incidunt veritatis error sit doloribus, quaerat labore? Corporis praesentium officiis vitae quis dolor odit eos voluptatum iure? Modi accusamus veniam unde, eligendi soluta vel ducimus odio esse, molestias quae facere perferendis alias deleniti voluptates recusandae cumque quis tenetur! Fugiat, ab fugit ea ipsa harum ducimus distinctio esse dolore necessitatibus aliquid minima error sequi exercitationem et illum temporibus tempore magni quis numquam dignissimos porro inventore, pariatur, modi similique. Ipsa rem voluptates fugiat. Culpa praesentium officia earum in? Voluptate fugit expedita facilis laudantium itaque deleniti aliquid ratione. Incidunt magni praesentium repellendus unde magnam molestiae odit tenetur at beatae blanditiis, sit consequatur ut recusandae quam? Fugit, explicabo! Blanditiis accusantium, ab optio a culpa accusamus doloremque tempore similique laborum esse, voluptatum error pariatur voluptas saepe dolorem provident quam id, corrupti soluta sint cupiditate. Deserunt sapiente veniam est ab praesentium dolorem voluptates veritatis?' +
            '\n\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Aut molestias laudantium vitae nisi blanditiis magnam, minus asperiores ullam facere numquam, optio impedit, veniam nam commodi consequatur nemo quos nesciunt quisquam consectetur. Accusamus delectus vitae maiores saepe quibusdam similique praesentium architecto perferendis, non nihil qui quia inventore! Non totam necessitatibus quis illo iste at quod mollitia tenetur enim molestias corrupti quia optio, ipsa eligendi provident a maxime dolore explicabo odio corporis impedit tempore. Facere nam non veniam, repellendus eaque iusto deserunt obcaecati eveniet aliquid vitae eligendi dolor odio voluptatibus repudiandae. Vero accusamus perspiciatis atque, asperiores architecto neque deserunt, harum commodi rem molestias alias eaque voluptatem error maiores facilis esse debitis at ab doloribus modi ex? Provident eaque expedita totam minus dolor sequi voluptatem sint fuga illo iste impedit porro id voluptates nihil, harum nostrum at nesciunt in maxime aspernatur! Nisi hic molestias animi porro reiciendis necessitatibus voluptatibus modi deleniti ex atque, sequi consectetur qui ea inventore repellendus. Tenetur, at quos. Amet, aliquam. Quisquam necessitatibus aliquam dolore totam enim voluptate deleniti velit unde, aspernatur eius magni non tenetur. Ipsam ducimus obcaecati sit asperiores exercitationem dolorum repellendus accusamus dolore consectetur qui! Amet neque culpa consequatur. Reprehenderit, corrupti architecto, fugiat a ab est praesentium rem vero incidunt officia unde iure? Iusto laboriosam maiores labore. Sit amet esse obcaecati doloremque quas quibusdam aut, incidunt quam. Odit nemo eveniet eum aut, eligendi ullam! Illum amet sed dignissimos dicta ex qui repellendus vitae, officiis molestiae enim nulla aliquid sint aspernatur suscipit soluta delectus cum at unde voluptatum quam tenetur est? Repudiandae minima enim fugit quis, amet quae tempore recusandae ipsam in magnam obcaecati, porro rem rerum nam! Vitae in alias nihil commodi eaque consequatur cumque at, asperiores accusamus reprehenderit delectus animi porro accusantium omnis neque? Ipsam similique cumque iusto quis tenetur eveniet ratione dolorem, itaque omnis, fugiat illum quod quidem? Repellat inventore, culpa distinctio error dolores adipisci architecto cumque debitis commodi et voluptates, velit, maiores dolorem eum dolor itaque excepturi rerum omnis! Quidem veritatis inventore, molestiae perferendis voluptas vitae porro quia temporibus laborum beatae tenetur quaerat, culpa quis nam iure sapiente rerum nihil soluta accusantium esse. Blanditiis eius ratione suscipit praesentium assumenda veniam nobis in eligendi aspernatur laudantium voluptate incidunt veritatis error sit doloribus, quaerat labore? Corporis praesentium officiis vitae quis dolor odit eos voluptatum iure? Modi accusamus veniam unde, eligendi soluta vel ducimus odio esse, molestias quae facere perferendis alias deleniti voluptates recusandae cumque quis tenetur! Fugiat, ab fugit ea ipsa harum ducimus distinctio esse dolore necessitatibus aliquid minima error sequi exercitationem et illum temporibus tempore magni quis numquam dignissimos porro inventore, pariatur, modi similique. Ipsa rem voluptates fugiat. Culpa praesentium officia earum in? Voluptate fugit expedita facilis laudantium itaque deleniti aliquid ratione. Incidunt magni praesentium repellendus unde magnam molestiae odit tenetur at beatae blanditiis, sit consequatur ut recusandae quam? Fugit, explicabo! Blanditiis accusantium, ab optio a culpa accusamus doloremque tempore similique laborum esse, voluptatum error pariatur voluptas saepe dolorem provident quam id, corrupti soluta sint cupiditate. Deserunt sapiente veniam est ab praesentium dolorem voluptates veritatis?' +
            '\n\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Aut molestias laudantium vitae nisi blanditiis magnam, minus asperiores ullam facere numquam, optio impedit, veniam nam commodi consequatur nemo quos nesciunt quisquam consectetur. Accusamus delectus vitae maiores saepe quibusdam similique praesentium architecto perferendis, non nihil qui quia inventore! Non totam necessitatibus quis illo iste at quod mollitia tenetur enim molestias corrupti quia optio, ipsa eligendi provident a maxime dolore explicabo odio corporis impedit tempore. Facere nam non veniam, repellendus eaque iusto deserunt obcaecati eveniet aliquid vitae eligendi dolor odio voluptatibus repudiandae. Vero accusamus perspiciatis atque, asperiores architecto neque deserunt, harum commodi rem molestias alias eaque voluptatem error maiores facilis esse debitis at ab doloribus modi ex? Provident eaque expedita totam minus dolor sequi voluptatem sint fuga illo iste impedit porro id voluptates nihil, harum nostrum at nesciunt in maxime aspernatur! Nisi hic molestias animi porro reiciendis necessitatibus voluptatibus modi deleniti ex atque, sequi consectetur qui ea inventore repellendus. Tenetur, at quos. Amet, aliquam. Quisquam necessitatibus aliquam dolore totam enim voluptate deleniti velit unde, aspernatur eius magni non tenetur. Ipsam ducimus obcaecati sit asperiores exercitationem dolorum repellendus accusamus dolore consectetur qui! Amet neque culpa consequatur. Reprehenderit, corrupti architecto, fugiat a ab est praesentium rem vero incidunt officia unde iure? Iusto laboriosam maiores labore. Sit amet esse obcaecati doloremque quas quibusdam aut, incidunt quam. Odit nemo eveniet eum aut, eligendi ullam! Illum amet sed dignissimos dicta ex qui repellendus vitae, officiis molestiae enim nulla aliquid sint aspernatur suscipit soluta delectus cum at unde voluptatum quam tenetur est? Repudiandae minima enim fugit quis, amet quae tempore recusandae ipsam in magnam obcaecati, porro rem rerum nam! Vitae in alias nihil commodi eaque consequatur cumque at, asperiores accusamus reprehenderit delectus animi porro accusantium omnis neque? Ipsam similique cumque iusto quis tenetur eveniet ratione dolorem, itaque omnis, fugiat illum quod quidem? Repellat inventore, culpa distinctio error dolores adipisci architecto cumque debitis commodi et voluptates, velit, maiores dolorem eum dolor itaque excepturi rerum omnis! Quidem veritatis inventore, molestiae perferendis voluptas vitae porro quia temporibus laborum beatae tenetur quaerat, culpa quis nam iure sapiente rerum nihil soluta accusantium esse. Blanditiis eius ratione suscipit praesentium assumenda veniam nobis in eligendi aspernatur laudantium voluptate incidunt veritatis error sit doloribus, quaerat labore? Corporis praesentium officiis vitae quis dolor odit eos voluptatum iure? Modi accusamus veniam unde, eligendi soluta vel ducimus odio esse, molestias quae facere perferendis alias deleniti voluptates recusandae cumque quis tenetur! Fugiat, ab fugit ea ipsa harum ducimus distinctio esse dolore necessitatibus aliquid minima error sequi exercitationem et illum temporibus tempore magni quis numquam dignissimos porro inventore, pariatur, modi similique. Ipsa rem voluptates fugiat. Culpa praesentium officia earum in? Voluptate fugit expedita facilis laudantium itaque deleniti aliquid ratione. Incidunt magni praesentium repellendus unde magnam molestiae odit tenetur at beatae blanditiis, sit consequatur ut recusandae quam? Fugit, explicabo! Blanditiis accusantium, ab optio a culpa accusamus doloremque tempore similique laborum esse, voluptatum error pariatur voluptas saepe dolorem provident quam id, corrupti soluta sint cupiditate. Deserunt sapiente veniam est ab praesentium dolorem voluptates veritatis?',
          partId: 'p2',
          passageHeadingList: [
            {
              id: 'heading1',
              createdAt: new Date(),
              updatedAt: new Date(),
              order: 1,
              content: 'This is a mock passage heading content.',
              title: 'Mock Heading 1',
              passageId: 'passage1'
            }
            // Add more mock passage headings as needed
          ]
        },
        questions: [
          {
            id: 'q1',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 1,
            correctAnswer: 'Answer 1',
            explain: 'Explanation for Question 1',
            respond: '',
            questionGroupId: 'g1', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q2',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 2,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g1', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q3',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 3,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g2', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q4',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 4,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g2', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q5',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 5,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g3', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q6',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 6,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g3', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q7',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 7,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g3', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          },
          {
            id: 'q8',
            createdAt: new Date(),
            updatedAt: new Date(),
            questionNumber: 8,
            correctAnswer: 'Answer 2',
            explain: 'Explanation for Question 2',
            respond: '',
            questionGroupId: 'g3', // assign the appropriate group id
            partId: 'p1',
            assessmentId: '1',
            completionId: null,
            multiOne: null,
            multiMore: null,
            matchingChoice: null,
            identifyInfo: null
          }
        ]
      }
      // Add more mock parts as needed
    ]
  },
  {
    id: '2',
    createdAt: new Date(),
    updatedAt: new Date(),
    bookName: 'IELTS Listening Test 2',
    imageCover: '/next.svg',
    name: 'IELTS Listening Test 2',
    totalQuestions: 40,
    duration: 60,
    isPublic: true,
    sectionType: SectionType.LISTENING,
    questions: [],
    parts: [
      {
        id: 'p1',
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Mock Part 1',
        description: 'Description for Mock Part 1',
        order: 1,
        audioFile:
          'https://media.memesoundeffects.com/2022/02/Rick-Roll-Sound-Effect.mp3',
        assessmentId: 'mock-id',
        questionGroups: [
          {
            id: 'g1',
            createdAt: new Date(),
            updatedAt: new Date(),
            title: 'Mock Group 1',
            description: 'Description for Mock Group 1',
            startQuestionNumber: 1,
            endQuestionNumber: 2,
            type: 'MULTIPLE_CHOICE_ONE_ANSWER',
            partId: 'p1',
            identifyInfoList: [],
            questions: [
              {
                id: 'q1',
                createdAt: new Date(),
                updatedAt: new Date(),
                questionNumber: 1,
                correctAnswer: 'Answer 1',
                explain: 'Explanation 1',
                respond: 'Response 1',
                questionGroupId: 'g1',
                partId: 'p1',
                assessmentId: 'mock-id',
                completionId: null
              },
              {
                id: 'q2',
                createdAt: new Date(),
                updatedAt: new Date(),
                questionNumber: 2,
                correctAnswer: 'Answer 2',
                explain: 'Explanation 2',
                respond: 'Response 2',
                questionGroupId: 'g1',
                partId: 'p1',
                assessmentId: 'mock-id',
                completionId: null
              }
              // Add more mock questions as needed
            ],
            matching: null,
            completion: null,
            multiMoreList: [],
            multiOneList: [
              {
                id: 'm1',
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Mock Multiple Choice One Answer 1',
                questionId: 'q1',
                questionGroupId: 'g1',
                choices: [
                  {
                    id: 'c1',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 1',
                    isCorrect: true,
                    order: 1,
                    explanation: 'Explanation for Choice 1',
                    multiOneId: 'm1',
                    multiMoreId: null
                  },
                  {
                    id: 'c2',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 2',
                    isCorrect: false,
                    order: 2,
                    explanation: 'Explanation for Choice 2',
                    multiOneId: 'm1',
                    multiMoreId: null
                  }
                  // Add more mock choices as needed
                ],
                question: {
                  id: 'q1',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 1,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g1',
                  partId: 'p1',
                  assessmentId: 'mock-id',
                  completionId: null
                }
              }
              // Add more mock MultipleChoiceOneAnswer as needed
            ]
          },
          {
            id: 'g2',
            createdAt: new Date(),
            updatedAt: new Date(),
            title: 'Mock Group 1',
            description: 'Description for Mock Group 1',
            startQuestionNumber: 2,
            endQuestionNumber: 3,
            type: 'IDENTIFYING_INFORMATION',
            partId: 'p2',
            identifyInfoList: [
              {
                id: 'i1',
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Mock Identify Info 1',
                choiceCorrect: 'TRUE',
                questionId: 'q1',
                questionGroupId: 'g1',
                question: {
                  id: 'q1',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 1,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g1',
                  partId: 'p1',
                  assessmentId: 'mock-id',
                  completionId: null
                }
              }
              // Add more mock identify info as needed
            ],
            questions: [],
            matching: null,
            completion: null,
            multiMoreList: [],
            multiOneList: []
          },
          {
            id: 'g3',
            createdAt: new Date(),
            updatedAt: new Date(),
            title: 'Mock Group 1',
            description: 'Description for Mock Group 1',
            startQuestionNumber: 4,
            endQuestionNumber: 5,
            type: 'MATCHING_HEADING',
            partId: 'p3',
            identifyInfoList: [],
            questions: [],
            matching: {
              id: 'm1',
              createdAt: new Date(),
              updatedAt: new Date(),
              questionGroupId: 'g1',
              paragraph: 'Mock paragraph for matching',
              titleForQuestion: 'Mock title for question',
              matchingChoiceList: [
                {
                  id: 'mc1',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  content: 'Mock Matching Choice 1',
                  questionId: 'q1',
                  matchingId: 'm1'
                }
                // Add more mock matching choices as needed
              ]
            },
            completion: null,
            multiMoreList: [],
            multiOneList: []
          },
          {
            id: 'g4',
            createdAt: new Date(),
            updatedAt: new Date(),
            title: 'Mock Group 1',
            description: 'Description for Mock Group 1',
            startQuestionNumber: 6,
            endQuestionNumber: 7,
            type: 'MULTIPLE_CHOICE_MORE_ANSWERS',
            partId: 'p4',
            identifyInfoList: [],
            questions: [
              {
                id: 'q1',
                createdAt: new Date(),
                updatedAt: new Date(),
                questionNumber: 1,
                correctAnswer: 'Answer 1',
                explain: 'Explanation 1',
                respond: 'Response 1',
                questionGroupId: 'g1',
                partId: 'p1',
                assessmentId: 'mock-id',
                completionId: null
              },
              {
                id: 'q2',
                createdAt: new Date(),
                updatedAt: new Date(),
                questionNumber: 2,
                correctAnswer: 'Answer 2',
                explain: 'Explanation 2',
                respond: 'Response 2',
                questionGroupId: 'g1',
                partId: 'p1',
                assessmentId: 'mock-id',
                completionId: null
              }
              // Add more mock questions as needed
            ],
            matching: null,
            completion: {
              id: 'c1',
              createdAt: new Date(),
              updatedAt: new Date(),
              paragraph:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est repellat nemo non consequatur error, perferendis quos ut mollitia veniam nostrum eligendi voluptatem quaerat harum rerum laboriosam impedit quia repellendus natus minima! Itaque, neque impedit quas doloremque eius culpa sapiente quod necessitatibus laudantium velit optio aspernatur, iusto nesciunt cumque tempora magni?',
              questionGroupId: 'g1',
              questions: [
                {
                  id: 'q1',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 1,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g1',
                  partId: 'p1',
                  assessmentId: 'mock-id',
                  completionId: 'c1'
                }
                // Add more mock completion questions as needed
              ]
            },
            multiMoreList: [
              {
                id: 'mm1',
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Mock Multiple Choice More Answer 1',
                explanation: 'Explanation for Multiple Choice More Answer 1',
                expectedAnswers: ['Answer 1', 'Answer 2'],
                questionId: 'q1',
                questionGroupId: 'g1',
                choices: [
                  {
                    id: 'c1',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 1',
                    isCorrect: true,
                    order: 1,
                    explanation: 'Explanation for Choice 1',
                    multiOneId: null,
                    multiMoreId: 'mm1'
                  },
                  {
                    id: 'c2',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    content: 'Choice 2',
                    isCorrect: false,
                    order: 2,
                    explanation: 'Explanation for Choice 2',
                    multiOneId: null,
                    multiMoreId: 'mm1'
                  }
                  // Add more mock choices as needed
                ],
                question: {
                  id: 'q1',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  questionNumber: 1,
                  correctAnswer: 'Answer 1',
                  explain: 'Explanation 1',
                  respond: 'Response 1',
                  questionGroupId: 'g1',
                  partId: 'p1',
                  assessmentId: 'mock-id',
                  completionId: null
                }
              }
              // Add more mock MultipleChoiceMoreAnswer as needed
            ],
            multiOneList: []
          }
        ],
        passage: {
          id: 'passage1',
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Mock Passage',
          description: 'Description for Mock Passage',
          image: null,
          type: 'PASSAGE_SIMPLE',
          content:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut molestias laudantium vitae nisi blanditiis magnam, minus asperiores ullam facere numquam, optio impedit, veniam nam commodi consequatur nemo quos nesciunt quisquam consectetur. Accusamus delectus vitae maiores saepe quibusdam similique praesentium architecto perferendis, non nihil qui quia inventore! Non totam necessitatibus quis illo iste at quod mollitia tenetur enim molestias corrupti quia optio, ipsa eligendi provident a maxime dolore explicabo odio corporis impedit tempore. Facere nam non veniam, repellendus eaque iusto deserunt obcaecati eveniet aliquid vitae eligendi dolor odio voluptatibus repudiandae. Vero accusamus perspiciatis atque, asperiores architecto neque deserunt, harum commodi rem molestias alias eaque voluptatem error maiores facilis esse debitis at ab doloribus modi ex? Provident eaque expedita totam minus dolor sequi voluptatem sint fuga illo iste impedit porro id voluptates nihil, harum nostrum at nesciunt in maxime aspernatur! Nisi hic molestias animi porro reiciendis necessitatibus voluptatibus modi deleniti ex atque, sequi consectetur qui ea inventore repellendus. Tenetur, at quos. Amet, aliquam. Quisquam necessitatibus aliquam dolore totam enim voluptate deleniti velit unde, aspernatur eius magni non tenetur. Ipsam ducimus obcaecati sit asperiores exercitationem dolorum repellendus accusamus dolore consectetur qui! Amet neque culpa consequatur. Reprehenderit, corrupti architecto, fugiat a ab est praesentium rem vero incidunt officia unde iure? Iusto laboriosam maiores labore. Sit amet esse obcaecati doloremque quas quibusdam aut, incidunt quam. Odit nemo eveniet eum aut, eligendi ullam! Illum amet sed dignissimos dicta ex qui repellendus vitae, officiis molestiae enim nulla aliquid sint aspernatur suscipit soluta delectus cum at unde voluptatum quam tenetur est? Repudiandae minima enim fugit quis, amet quae tempore recusandae ipsam in magnam obcaecati, porro rem rerum nam! Vitae in alias nihil commodi eaque consequatur cumque at, asperiores accusamus reprehenderit delectus animi porro accusantium omnis neque? Ipsam similique cumque iusto quis tenetur eveniet ratione dolorem, itaque omnis, fugiat illum quod quidem? Repellat inventore, culpa distinctio error dolores adipisci architecto cumque debitis commodi et voluptates, velit, maiores dolorem eum dolor itaque excepturi rerum omnis! Quidem veritatis inventore, molestiae perferendis voluptas vitae porro quia temporibus laborum beatae tenetur quaerat, culpa quis nam iure sapiente rerum nihil soluta accusantium esse. Blanditiis eius ratione suscipit praesentium assumenda veniam nobis in eligendi aspernatur laudantium voluptate incidunt veritatis error sit doloribus, quaerat labore? Corporis praesentium officiis vitae quis dolor odit eos voluptatum iure? Modi accusamus veniam unde, eligendi soluta vel ducimus odio esse, molestias quae facere perferendis alias deleniti voluptates recusandae cumque quis tenetur! Fugiat, ab fugit ea ipsa harum ducimus distinctio esse dolore necessitatibus aliquid minima error sequi exercitationem et illum temporibus tempore magni quis numquam dignissimos porro inventore, pariatur, modi similique. Ipsa rem voluptates fugiat. Culpa praesentium officia earum in? Voluptate fugit expedita facilis laudantium itaque deleniti aliquid ratione. Incidunt magni praesentium repellendus unde magnam molestiae odit tenetur at beatae blanditiis, sit consequatur ut recusandae quam? Fugit, explicabo! Blanditiis accusantium, ab optio a culpa accusamus doloremque tempore similique laborum esse, voluptatum error pariatur voluptas saepe dolorem provident quam id, corrupti soluta sint cupiditate. Deserunt sapiente veniam est ab praesentium dolorem voluptates veritatis?' +
            '\n\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Aut molestias laudantium vitae nisi blanditiis magnam, minus asperiores ullam facere numquam, optio impedit, veniam nam commodi consequatur nemo quos nesciunt quisquam consectetur. Accusamus delectus vitae maiores saepe quibusdam similique praesentium architecto perferendis, non nihil qui quia inventore! Non totam necessitatibus quis illo iste at quod mollitia tenetur enim molestias corrupti quia optio, ipsa eligendi provident a maxime dolore explicabo odio corporis impedit tempore. Facere nam non veniam, repellendus eaque iusto deserunt obcaecati eveniet aliquid vitae eligendi dolor odio voluptatibus repudiandae. Vero accusamus perspiciatis atque, asperiores architecto neque deserunt, harum commodi rem molestias alias eaque voluptatem error maiores facilis esse debitis at ab doloribus modi ex? Provident eaque expedita totam minus dolor sequi voluptatem sint fuga illo iste impedit porro id voluptates nihil, harum nostrum at nesciunt in maxime aspernatur! Nisi hic molestias animi porro reiciendis necessitatibus voluptatibus modi deleniti ex atque, sequi consectetur qui ea inventore repellendus. Tenetur, at quos. Amet, aliquam. Quisquam necessitatibus aliquam dolore totam enim voluptate deleniti velit unde, aspernatur eius magni non tenetur. Ipsam ducimus obcaecati sit asperiores exercitationem dolorum repellendus accusamus dolore consectetur qui! Amet neque culpa consequatur. Reprehenderit, corrupti architecto, fugiat a ab est praesentium rem vero incidunt officia unde iure? Iusto laboriosam maiores labore. Sit amet esse obcaecati doloremque quas quibusdam aut, incidunt quam. Odit nemo eveniet eum aut, eligendi ullam! Illum amet sed dignissimos dicta ex qui repellendus vitae, officiis molestiae enim nulla aliquid sint aspernatur suscipit soluta delectus cum at unde voluptatum quam tenetur est? Repudiandae minima enim fugit quis, amet quae tempore recusandae ipsam in magnam obcaecati, porro rem rerum nam! Vitae in alias nihil commodi eaque consequatur cumque at, asperiores accusamus reprehenderit delectus animi porro accusantium omnis neque? Ipsam similique cumque iusto quis tenetur eveniet ratione dolorem, itaque omnis, fugiat illum quod quidem? Repellat inventore, culpa distinctio error dolores adipisci architecto cumque debitis commodi et voluptates, velit, maiores dolorem eum dolor itaque excepturi rerum omnis! Quidem veritatis inventore, molestiae perferendis voluptas vitae porro quia temporibus laborum beatae tenetur quaerat, culpa quis nam iure sapiente rerum nihil soluta accusantium esse. Blanditiis eius ratione suscipit praesentium assumenda veniam nobis in eligendi aspernatur laudantium voluptate incidunt veritatis error sit doloribus, quaerat labore? Corporis praesentium officiis vitae quis dolor odit eos voluptatum iure? Modi accusamus veniam unde, eligendi soluta vel ducimus odio esse, molestias quae facere perferendis alias deleniti voluptates recusandae cumque quis tenetur! Fugiat, ab fugit ea ipsa harum ducimus distinctio esse dolore necessitatibus aliquid minima error sequi exercitationem et illum temporibus tempore magni quis numquam dignissimos porro inventore, pariatur, modi similique. Ipsa rem voluptates fugiat. Culpa praesentium officia earum in? Voluptate fugit expedita facilis laudantium itaque deleniti aliquid ratione. Incidunt magni praesentium repellendus unde magnam molestiae odit tenetur at beatae blanditiis, sit consequatur ut recusandae quam? Fugit, explicabo! Blanditiis accusantium, ab optio a culpa accusamus doloremque tempore similique laborum esse, voluptatum error pariatur voluptas saepe dolorem provident quam id, corrupti soluta sint cupiditate. Deserunt sapiente veniam est ab praesentium dolorem voluptates veritatis?' +
            '\n\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Aut molestias laudantium vitae nisi blanditiis magnam, minus asperiores ullam facere numquam, optio impedit, veniam nam commodi consequatur nemo quos nesciunt quisquam consectetur. Accusamus delectus vitae maiores saepe quibusdam similique praesentium architecto perferendis, non nihil qui quia inventore! Non totam necessitatibus quis illo iste at quod mollitia tenetur enim molestias corrupti quia optio, ipsa eligendi provident a maxime dolore explicabo odio corporis impedit tempore. Facere nam non veniam, repellendus eaque iusto deserunt obcaecati eveniet aliquid vitae eligendi dolor odio voluptatibus repudiandae. Vero accusamus perspiciatis atque, asperiores architecto neque deserunt, harum commodi rem molestias alias eaque voluptatem error maiores facilis esse debitis at ab doloribus modi ex? Provident eaque expedita totam minus dolor sequi voluptatem sint fuga illo iste impedit porro id voluptates nihil, harum nostrum at nesciunt in maxime aspernatur! Nisi hic molestias animi porro reiciendis necessitatibus voluptatibus modi deleniti ex atque, sequi consectetur qui ea inventore repellendus. Tenetur, at quos. Amet, aliquam. Quisquam necessitatibus aliquam dolore totam enim voluptate deleniti velit unde, aspernatur eius magni non tenetur. Ipsam ducimus obcaecati sit asperiores exercitationem dolorum repellendus accusamus dolore consectetur qui! Amet neque culpa consequatur. Reprehenderit, corrupti architecto, fugiat a ab est praesentium rem vero incidunt officia unde iure? Iusto laboriosam maiores labore. Sit amet esse obcaecati doloremque quas quibusdam aut, incidunt quam. Odit nemo eveniet eum aut, eligendi ullam! Illum amet sed dignissimos dicta ex qui repellendus vitae, officiis molestiae enim nulla aliquid sint aspernatur suscipit soluta delectus cum at unde voluptatum quam tenetur est? Repudiandae minima enim fugit quis, amet quae tempore recusandae ipsam in magnam obcaecati, porro rem rerum nam! Vitae in alias nihil commodi eaque consequatur cumque at, asperiores accusamus reprehenderit delectus animi porro accusantium omnis neque? Ipsam similique cumque iusto quis tenetur eveniet ratione dolorem, itaque omnis, fugiat illum quod quidem? Repellat inventore, culpa distinctio error dolores adipisci architecto cumque debitis commodi et voluptates, velit, maiores dolorem eum dolor itaque excepturi rerum omnis! Quidem veritatis inventore, molestiae perferendis voluptas vitae porro quia temporibus laborum beatae tenetur quaerat, culpa quis nam iure sapiente rerum nihil soluta accusantium esse. Blanditiis eius ratione suscipit praesentium assumenda veniam nobis in eligendi aspernatur laudantium voluptate incidunt veritatis error sit doloribus, quaerat labore? Corporis praesentium officiis vitae quis dolor odit eos voluptatum iure? Modi accusamus veniam unde, eligendi soluta vel ducimus odio esse, molestias quae facere perferendis alias deleniti voluptates recusandae cumque quis tenetur! Fugiat, ab fugit ea ipsa harum ducimus distinctio esse dolore necessitatibus aliquid minima error sequi exercitationem et illum temporibus tempore magni quis numquam dignissimos porro inventore, pariatur, modi similique. Ipsa rem voluptates fugiat. Culpa praesentium officia earum in? Voluptate fugit expedita facilis laudantium itaque deleniti aliquid ratione. Incidunt magni praesentium repellendus unde magnam molestiae odit tenetur at beatae blanditiis, sit consequatur ut recusandae quam? Fugit, explicabo! Blanditiis accusantium, ab optio a culpa accusamus doloremque tempore similique laborum esse, voluptatum error pariatur voluptas saepe dolorem provident quam id, corrupti soluta sint cupiditate. Deserunt sapiente veniam est ab praesentium dolorem voluptates veritatis?',
          partId: 'p1',
          passageHeadingList: [
            {
              id: 'heading1',
              createdAt: new Date(),
              updatedAt: new Date(),
              order: 1,
              content: 'This is a mock passage heading content.',
              title: 'Mock Heading 1',
              passageId: 'passage1'
            }
            // Add more mock passage headings as needed
          ]
        },
        questions: []
      }
      // Add more mock parts as needed
    ]
  },
  {
    id: '3',
    createdAt: new Date(),
    updatedAt: new Date(),
    bookName: 'IELTS Writting Test 3',
    imageCover: '/next.svg',
    name: 'IELTS Writting Test 3',
    totalQuestions: 40,
    duration: 60,
    isPublic: true,
    sectionType: SectionType.WRITTING,
    questions: [],
    parts: [
      {
        id: 'p1',
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Task 2',
        description: ' .',
        order: 1,
        audioFile: '',
        assessmentId: 'mock-id',
        questionGroups: [],
        passage: {
          id: 'passage1',
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Task 2A',
          description: '.',
          image: null,
          type: 'PASSAGE_SIMPLE',
          content:
            'You should spend about 40 minutes on this task.\nWrite about the following topic.\nThe first car appeared on British roads in 1888. By the year 2000 there may be as many as 29 million vehicles on British roads.\nAlternative forms of transport should be encouraged and international laws introduced to control car ownership and use.\nTo what extent do you agree or disagree?\nGive reasons for your answer and include any relevant examples from your knowledge or experience.\nWrite at least 250 words.',
          partId: 'p1',
          passageHeadingList: [
            {
              id: 'heading1',
              createdAt: new Date(),
              updatedAt: new Date(),
              order: 1,
              content: 'This is a mock passage heading content.',
              title: 'Mock Heading 1',
              passageId: 'passage1'
            }
            // Add more mock passage headings as needed
          ]
        },
        questions: []
      }
      // Add more mock parts as needed
    ]
  }
];

const assessmentsTest = [
  {
    id: '1',
    lastUpdated: new Date(),
    coverImage: '/vercel.svg',
    name: 'IELTS Reading Test 1',
    duration: 60,
    isPublic: true,
    type: SectionType.READING,
    parts: [
      {
        title: 'Mock Part 1',
        description: 'Description for Mock Part 1',
        htmlDisplay: '',
        questionGroups: [
          {
            // type: QuestionType.MULTIPLE_CHOICE,
            description: '',
            questions: [
              {
                question: 'What is lmao?',
                correctAnswerIndex: 0,
                answers: ['lmao', 'lmao', 'bruh', 'bruh']
              },
              {
                question: 'What is lmao?',
                correctAnswerIndex: 2,
                answers: ['lmao', 'lmao', 'bruh', 'bruh']
              }
            ]
          },
          {
            // type: QuestionType.IDENTIFYING_INFORMATION,
            description: '',
            questions: [
              {
                question: 'What is lmao?',
                correctAnswer: 'T'
              },
              {
                question: 'What is lmao?',
                correctAnswer: 'F'
              },
              {
                question: 'What is lmao?',
                correctAnswer: 'G'
              }
            ]
          }
        ]
      }
    ]
  }
];
