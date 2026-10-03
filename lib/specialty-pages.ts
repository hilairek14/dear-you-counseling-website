export type SpecialtyContent = {
  slug: string
  label: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  intro: string[]
  whoItHelps: { intro: string; items: string[] }
  signs: { intro: string; items: string[] }
  approach: { intro: string; items: { title: string; body: string }[] }
  sessions: string[]
  faqs: { question: string; answer: string }[]
}

export const specialtyPages: SpecialtyContent[] = [
  {
    slug: 'anxiety-therapy',
    label: 'Anxiety',
    metaTitle: 'Online Anxiety Therapy in Florida | Dear You Counseling',
    metaDescription:
      'Gentle, evidence-based online anxiety therapy for adults across Florida. Learn tools to quiet worry and feel grounded. Free 15-minute consultation.',
    eyebrow: 'Anxiety',
    h1: 'Online Anxiety Therapy in Florida',
    intro: [
      'Anxiety can make your mind feel like it never gets to rest. Maybe your thoughts race at night, your chest tightens before a meeting, or you replay conversations long after they end. You might look calm on the outside while working hard just to hold it all together.',
      'You do not have to keep managing this alone. Through secure online therapy, I help young adults and adults across Florida understand their anxiety, soften its grip, and build steady, practical ways to feel more at ease, all from the comfort of home.',
    ],
    whoItHelps: {
      intro: 'Anxiety therapy can be a good fit if you are:',
      items: [
        'A college student or young professional feeling pressure to have everything figured out',
        'A parent, caregiver, or leader who carries everyone else and rarely gets a break',
        'Someone who has always been called a "worrier" and is ready for relief',
        'Navigating panic attacks, health worries, or social anxiety',
        'Looking for care that honors your culture, family, and faith',
      ],
    },
    signs: {
      intro: 'Anxiety shows up differently for everyone. Some common signs include:',
      items: [
        'Constant worry or a sense that something bad is about to happen',
        'Trouble falling or staying asleep because your mind will not slow down',
        'Muscle tension, headaches, stomach trouble, or a racing heart',
        'Avoiding people, places, or tasks because they feel overwhelming',
        'Perfectionism, overthinking, or difficulty making decisions',
        'Irritability or feeling on edge most of the day',
      ],
    },
    approach: {
      intro:
        'There is no one-size-fits-all plan. I draw on a few evidence-based approaches and tailor them to your unique pace and needs.',
      items: [
        {
          title: 'Cognitive Behavioral Therapy (CBT)',
          body: 'We gently notice the anxious thoughts that feed worry, test how true they really are, and practice new responses. You leave with concrete skills like grounding, breathing, and reframing that you can use anytime.',
        },
        {
          title: 'Strengths-based therapy',
          body: 'Anxiety often hides how capable you already are. We identify the strengths, values, and coping skills that have carried you this far and build on them with intention.',
        },
        {
          title: 'Trauma-informed care',
          body: 'For many people, anxiety is rooted in past experiences that taught the body to stay on alert. We move carefully, prioritizing your sense of safety, choice, and control in every session.',
        },
      ],
    },
    sessions: [
      'Our sessions are held over a secure, private video platform. You can join from your living room, a quiet bedroom, or any private space in Florida where you feel comfortable. Sessions last about 50 minutes and usually happen weekly at first.',
      'In early sessions we focus on getting to know you: what anxiety looks like in your daily life, what you have already tried, and what you hope will feel different. From there we set goals together and practice tools in real time, so you can notice small shifts between sessions. You set the pace, and you are always welcome to pause or slow down.',
    ],
    faqs: [
      {
        question: 'Can online therapy really help with anxiety?',
        answer:
          'Yes. Research shows that online therapy, especially CBT, can be just as effective for anxiety as in-person care. Many clients also find it easier to open up from a space that already feels safe.',
      },
      {
        question: 'What if I get anxious during a session?',
        answer:
          'That is okay and even helpful. We can slow down, practice a grounding exercise together, and use the moment to learn what your body needs to feel calmer.',
      },
      {
        question: 'How long does anxiety therapy take?',
        answer:
          'It depends on your goals. Some clients notice relief within a few months, while others choose longer-term support. We will check in on your progress regularly and adjust together.',
      },
    ],
  },
  {
    slug: 'trauma-therapy',
    label: 'Trauma',
    metaTitle: 'Online Trauma Therapy in Florida | Dear You Counseling',
    metaDescription:
      'Trauma-informed online therapy for adults across Florida. Heal from painful experiences at your own pace in a safe, culturally sensitive space.',
    eyebrow: 'Trauma',
    h1: 'Online Trauma Therapy in Florida',
    intro: [
      'Trauma can leave lasting marks long after a painful experience is over. You may feel jumpy or numb, struggle to trust others, or find that certain sounds, places, or memories bring the past rushing back. These reactions are not a sign of weakness. They are your mind and body trying to protect you.',
      'Healing is possible, and it can happen at your own pace. I offer trauma-informed online therapy for young adults and adults across Florida, creating a safe, respectful space where you are always in control of what you share and when.',
    ],
    whoItHelps: {
      intro: 'Trauma therapy may be helpful if you have experienced:',
      items: [
        'Childhood abuse, neglect, or growing up in a chaotic home',
        'An abusive or controlling relationship',
        'A sudden loss, accident, medical crisis, or natural disaster',
        'Racial trauma, discrimination, or religious hurt',
        'Ongoing stress that left you feeling unsafe in your own life',
      ],
    },
    signs: {
      intro: 'The effects of trauma can be subtle or intense. Common signs include:',
      items: [
        'Intrusive memories, nightmares, or flashbacks',
        'Feeling constantly on guard, startled easily, or unable to relax',
        'Emotional numbness or feeling disconnected from yourself',
        'Avoiding reminders of what happened',
        'Shame, guilt, or harsh self-criticism',
        'Difficulty trusting others or feeling close in relationships',
      ],
    },
    approach: {
      intro:
        'Trauma work should never feel rushed or forced. Everything we do is guided by safety, trust, choice, and collaboration.',
      items: [
        {
          title: 'Trauma-informed care',
          body: 'Before we ever talk about painful memories, we focus on stability: building calming skills, understanding your nervous system, and making sure you feel safe with me. You decide what to share and when.',
        },
        {
          title: 'Cognitive Behavioral Therapy (CBT)',
          body: 'Trauma can leave behind painful beliefs such as "it was my fault" or "I am never safe." CBT helps us gently examine these beliefs and replace them with ones that are more compassionate and true.',
        },
        {
          title: 'Strengths-based therapy',
          body: 'You survived something hard, and that took courage. We honor the resilience, faith, relationships, and inner wisdom that helped you through, and use them as a foundation for healing.',
        },
      ],
    },
    sessions: [
      'Sessions take place over secure, private video, so you can heal from a place that already feels familiar. Many clients find that being at home, wrapped in a favorite blanket or with a cup of tea nearby, makes it easier to feel grounded.',
      'We begin by getting to know each other and building a sense of safety. Over time, and only when you feel ready, we may gently explore what happened and how it affects you today. Each session ends with time to settle and reconnect to the present, so you can return to your day feeling steady.',
    ],
    faqs: [
      {
        question: 'Do I have to talk about the details of my trauma?',
        answer:
          'No. You are always in control. Many people heal without retelling every detail. We will focus on what feels helpful and safe for you.',
      },
      {
        question: 'Is online therapy safe for trauma work?',
        answer:
          'Yes. With a secure platform and careful pacing, online therapy can be very effective for trauma. We will also create a plan together for what to do if you feel overwhelmed during or after a session.',
      },
      {
        question: 'What if my trauma is related to my faith or culture?',
        answer:
          'Your experiences will be met with respect and care. Whether faith is a source of comfort, pain, or both, we can explore it in a way that feels right for you.',
      },
    ],
  },
  {
    slug: 'depression-therapy',
    label: 'Depression',
    metaTitle: 'Online Depression Therapy in Florida | Dear You Counseling',
    metaDescription:
      'Compassionate online depression therapy for adults across Florida. Rediscover energy, hope, and meaning with evidence-based, faith-informed care.',
    eyebrow: 'Depression',
    h1: 'Online Depression Therapy in Florida',
    intro: [
      'Depression can make even simple things feel heavy. Getting out of bed, answering a text, or enjoying something you used to love may take more energy than you have. Sometimes it feels like sadness. Other times it feels like nothing at all.',
      'You deserve support, and you do not have to wait until things get worse to reach out. I provide online depression therapy for young adults and adults across Florida, offering a warm, non-judgmental space to slowly reconnect with energy, hope, and meaning.',
    ],
    whoItHelps: {
      intro: 'Depression therapy may be a good fit if you are:',
      items: [
        'Feeling stuck, unmotivated, or disconnected from your life',
        'Going through grief, loss, or a painful season',
        'Struggling with low self-worth or harsh inner criticism',
        'Experiencing postpartum or seasonal changes in mood',
        'Wanting care that respects your faith, culture, and values',
      ],
    },
    signs: {
      intro: 'Depression does not always look the same. Common signs include:',
      items: [
        'Persistent sadness, emptiness, or hopelessness',
        'Losing interest in activities, people, or things you once enjoyed',
        'Changes in sleep or appetite',
        'Low energy, fatigue, or difficulty concentrating',
        'Pulling away from friends, family, or community',
        'Feelings of guilt, worthlessness, or being a burden',
      ],
    },
    approach: {
      intro:
        'Healing from depression happens step by step. We will work together using approaches tailored to your unique pace and needs.',
      items: [
        {
          title: 'Cognitive Behavioral Therapy (CBT)',
          body: 'Depression often brings a heavy inner voice. CBT helps us notice those thoughts, challenge the ones that are not true, and plan small, doable actions that gradually rebuild energy and momentum.',
        },
        {
          title: 'Strengths-based therapy',
          body: 'Even on hard days, you carry gifts and values that matter. We will identify what still brings you a spark of meaning and intentionally make more room for it in your life.',
        },
        {
          title: 'Trauma-informed care',
          body: 'Sometimes depression is connected to past hurt or ongoing stress. We move gently, with respect for your story and your sense of safety, so you never feel pushed beyond what you can handle.',
        },
      ],
    },
    sessions: [
      'Sessions are held over secure video, which means you can get support even on days when leaving the house feels impossible. All you need is a private space in Florida and a phone or computer.',
      'We will start by understanding what depression feels like for you and what you hope will change. Together we set small, meaningful goals and celebrate progress, no matter how small it seems. If you are also working with a doctor or psychiatrist, I am happy to coordinate care with your permission.',
    ],
    faqs: [
      {
        question: 'How do I know if I have depression or I am just tired?',
        answer:
          'If low mood, lack of interest, or exhaustion last for two weeks or more and affect your daily life, it may be depression. A consultation is a gentle way to talk it through.',
      },
      {
        question: 'Do I need medication too?',
        answer:
          'Not always. Many people improve with therapy alone. If it seems medication could help, I can share options and support you in talking with a medical provider.',
      },
      {
        question: 'What if I am having thoughts of suicide?',
        answer:
          'Please reach out for immediate support by calling or texting 988, or call 911. You are not alone, and help is available right now.',
      },
    ],
  },
  {
    slug: 'life-transitions',
    label: 'Life Transitions',
    metaTitle: 'Online Therapy for Life Transitions in Florida | Dear You Counseling',
    metaDescription:
      'Online therapy for life transitions in Florida. Navigate new careers, relocation, loss, relationships, and parenthood with clarity and support.',
    eyebrow: 'Life Transitions',
    h1: 'Online Therapy for Life Transitions in Florida',
    intro: [
      'Change can be exciting, painful, or both at the same time. Starting college, beginning a new career, moving to a new city, ending a relationship, becoming a parent, or losing someone you love can shake your sense of who you are and where you are going.',
      'Even welcome changes can bring unexpected stress. Through online therapy, I help young adults and adults across Florida navigate seasons of change with clarity, resilience, and a steady place to process everything that comes with it.',
    ],
    whoItHelps: {
      intro: 'Therapy for life transitions can support you through:',
      items: [
        'Graduating, starting college, or entering the workforce',
        'Career changes, job loss, or retirement',
        'Relocating to or within Florida',
        'Marriage, divorce, or the end of a relationship',
        'Pregnancy, new parenthood, or an empty nest',
        'Grief, caregiving, or changes in health',
      ],
    },
    signs: {
      intro: 'You might benefit from support during a transition if you notice:',
      items: [
        'Feeling unsure of who you are or what you want next',
        'Ongoing stress, worry, or restlessness about the future',
        'Sadness or grief for the life you are leaving behind',
        'Trouble sleeping, focusing, or making decisions',
        'Feeling isolated or like no one understands',
        'Questioning your faith, purpose, or direction',
      ],
    },
    approach: {
      intro:
        'Seasons of change are an invitation to grow. I draw on proven approaches and tailor each one to your unique pace and needs.',
      items: [
        {
          title: 'Strengths-based therapy',
          body: 'You have navigated change before. We will reflect on what has helped you in the past and build on those strengths so you can move forward with more confidence.',
        },
        {
          title: 'Cognitive Behavioral Therapy (CBT)',
          body: 'Uncertainty can fuel anxious or discouraging thoughts. CBT helps us sort through them, focus on what is in your control, and break big changes into manageable steps.',
        },
        {
          title: 'Trauma-informed care',
          body: 'Some transitions, like sudden loss or an unexpected move, can feel traumatic. We will honor how this change has affected you and create a space where you feel safe to process it.',
        },
      ],
    },
    sessions: [
      'Online sessions fit naturally into a busy or changing life. Whether you are settling into a new home, juggling a new schedule, or caring for a newborn, you can meet with me from any private space in Florida.',
      'We will begin by exploring what is changing, what feels hardest, and what you hope to carry into this next chapter. Sessions offer room to grieve what is ending, clarify your values, and make thoughtful decisions about what comes next.',
    ],
    faqs: [
      {
        question: 'Do I need to be in crisis to start therapy?',
        answer:
          'Not at all. Many people come to therapy simply because a season of change feels heavy or confusing. Getting support early can make the transition smoother.',
      },
      {
        question: 'What if I am excited about the change but still struggling?',
        answer:
          'That is very common. Even positive changes involve loss and adjustment. There is space for all of your feelings in our work together.',
      },
      {
        question: 'Can I keep seeing you if I move within Florida?',
        answer:
          'Yes. Because sessions are online, you can continue working with me from anywhere in Florida.',
      },
    ],
  },
  {
    slug: 'faith-informed-therapy',
    label: 'Faith-Informed Therapy',
    metaTitle: 'Faith-Informed Online Therapy in Florida | Dear You Counseling',
    metaDescription:
      'Culturally sensitive, faith-informed online therapy in Florida. Faith is integrated only if you want it, and secular sessions are always available.',
    eyebrow: 'Faith-Informed Therapy',
    h1: 'Faith-Informed Online Therapy in Florida',
    intro: [
      'Your faith, culture, and family traditions are part of who you are. For many people, they are a deep source of strength, comfort, and meaning. For others, they can also carry questions, tension, or hurt. All of it is welcome here.',
      'I offer culturally sensitive, faith-informed online therapy to young adults and adults across Florida. Faith is integrated only if you want it, fully secular sessions are always available, and you always decide what feels right for you.',
    ],
    whoItHelps: {
      intro: 'Faith-informed therapy may be a good fit if you:',
      items: [
        'Want a therapist who respects and understands the role of faith in your life',
        'Hope to draw on prayer, scripture, or spiritual practices as part of healing',
        'Are navigating spiritual questions, doubt, or a change in beliefs',
        'Have experienced religious hurt and want a safe space to process it',
        'Want care that honors your cultural background and family values',
      ],
    },
    signs: {
      intro: 'People often seek faith-informed or culturally sensitive care when they notice:',
      items: [
        'Feeling that past therapists did not understand their culture or faith',
        'Tension between personal beliefs and family or community expectations',
        'Guilt or shame connected to faith or spiritual struggles',
        'A desire to reconnect with spiritual practices that once brought peace',
        'Anxiety, depression, or grief alongside questions of purpose and meaning',
      ],
    },
    approach: {
      intro:
        'Faith-informed therapy is still grounded in evidence-based care. Your beliefs guide how we use these tools, not the other way around.',
      items: [
        {
          title: 'Culturally sensitive care',
          body: 'I take time to understand your background, identity, and the communities that shaped you. Your culture is never something to overcome. It is part of your story and your strength.',
        },
        {
          title: 'Faith integrated by your choice',
          body: 'If you would like, we can weave in prayer, scripture, values, or spiritual reflection alongside approaches like CBT and strengths-based therapy. If you prefer, sessions remain completely secular. You can change your mind at any time.',
        },
        {
          title: 'Trauma-informed and judgment-free',
          body: 'Whether faith feels like a refuge or a source of pain right now, I will meet you with compassion, never pressure. You lead, and we move at your pace.',
        },
      ],
    },
    sessions: [
      'In our first conversation, I will ask how, if at all, you would like faith or culture to be part of therapy. There is no right answer. Some clients want faith at the center of our work, others want it occasionally, and many prefer not to include it at all.',
      'Sessions take place over secure video from any private space in Florida. Together we focus on the concerns that brought you in, such as anxiety, depression, trauma, life transitions, or relationships, while honoring the values that matter most to you.',
    ],
    faqs: [
      {
        question: 'Do I have to be religious to work with you?',
        answer:
          'No. Clients of all faiths and no faith are welcome. Fully secular sessions are always available, and your beliefs will be respected either way.',
      },
      {
        question: 'Will you push your beliefs on me?',
        answer:
          'Never. Therapy is about your values and your goals. You always decide whether and how faith is included.',
      },
      {
        question: 'Can we talk about doubts or religious hurt?',
        answer:
          'Yes. You are welcome to bring questions, doubts, or painful experiences with faith communities. We will explore them gently and without judgment.',
      },
    ],
  },
]

export function getSpecialtyPage(slug: string) {
  const page = specialtyPages.find((item) => item.slug === slug)
  if (!page) throw new Error(`Unknown specialty page: ${slug}`)
  return page
}
