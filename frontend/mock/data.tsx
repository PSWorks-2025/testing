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
                  partId: 'p1',
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
                  questionId: 'q6',
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
                questionId: 'q7',
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
                  id: 'q7',
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
                questionId: 'q8',
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
                  id: 'q8',
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
        title: 'Mock Part 1',
        description: 'Description for Mock Part 1',
        order: 1,
        audioFile: '',
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
            startQuestionNumber: 1,
            endQuestionNumber: 2,
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
            startQuestionNumber: 1,
            endQuestionNumber: 2,
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
            startQuestionNumber: 2,
            endQuestionNumber: 3,
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
