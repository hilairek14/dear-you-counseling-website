export type SpecialtyPageContent = {
  slug: string
  navTitle: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  intro: string
  whoHeading: string
  who: string[]
  signsHeading: string
  signs: string[]
  approachHeading: string
  approachIntro: string
  approaches: { name: string; text: string }[]
  sessionsHeading: string
  sessions: string[]
  faqs: { q: string; a: string }[]
  related: string[]
}

export const specialtyPages: SpecialtyPageContent[] = [
  {
    slug: 'anxiety-therapy',
    navTitle: 'Anxiety Therapy',
    metaTitle: 'Online Anxiety Therapy in Florida | Dear You Counseling',
    metaDescription:
      'Culturally sensitive, faith-informed online anxiety therapy for adults across Florida. CBT and strengths-based care, with a free 15-minute consult.',
    eyebrow: 'Anxiety',
    h1: 'Online Anxiety Therapy in Florida',
    intro:
      'If your mind rarely slows down, you are not alone, and you do not have to keep white-knuckling your way through it. I offer culturally sensitive, faith-informed online anxiety therapy for adults across Florida, from the comfort of wherever you feel most at ease.',
    whoHeading: 'Who online anxiety therapy can help',
    who: [
      'Anxiety shows up differently for everyone. For some people it looks like constant worry about work, money, health, or family. For others it shows up as a tight chest, a racing heart, or trouble sleeping. Many of the people I work with are capable, caring adults who hold everything together on the outside while feeling overwhelmed on the inside.',
      'Online therapy can be a good fit if you are an adult located in Florida and want steady, practical support without adding a commute to an already full schedule. It can also be a gentle place to start if walking into an unfamiliar office feels like too much right now.',
    ],
    signsHeading: 'Common signs of anxiety',
    signs: [
      'Worry that feels hard to switch off, even when things are going well',
      'Racing thoughts, especially at night or when you are trying to rest',
      'Muscle tension, headaches, stomach trouble, or a pounding heart',
      'Avoiding situations, conversations, or places that feel overwhelming',
      'Needing frequent reassurance, or second-guessing decisions again and again',
      'Irritability, restlessness, or feeling constantly on edge',
      'Perfectionism or a deep fear of letting people down',
    ],
    approachHeading: 'How I approach anxiety',
    approachIntro:
      'I draw on three approaches, and we decide together what fits you best. You will never be handed a one-size-fits-all plan.',
    approaches: [
      {
        name: 'Cognitive Behavioral Therapy (CBT)',
        text: 'CBT helps us notice the thought patterns that feed anxiety, such as assuming the worst, and test them gently. You leave sessions with practical skills, like grounding and breathing techniques, ways to reframe stressful thoughts, and small steps for facing what you have been avoiding.',
      },
      {
        name: 'Strengths-based therapy',
        text: 'Anxiety can make you forget how much you have already handled. We name the strengths, values, and supports you already have, including family, community, and faith if that matters to you, and we build on them.',
      },
      {
        name: 'Trauma-informed care',
        text: 'When anxiety is tied to past hardship, we move at your pace. Safety, trust, and choice guide every session, and you decide how much to share and when.',
      },
    ],
    sessionsHeading: 'What online anxiety therapy sessions look like',
    sessions: [
      'Sessions are 50 minutes and take place over a secure video platform. You can join from home or another private space in Florida. Your first appointment is an intake assessment, where we talk through what brought you in, what you hope will feel different, and what has or has not helped before.',
      'After that, sessions settle into a steady rhythm. We check in on your week, practice a skill together, and talk through whatever is coming up. Many clients find that practicing coping skills in their own space helps those skills carry over into daily life.',
    ],
    faqs: [
      {
        q: 'How long does anxiety therapy take?',
        a: 'It varies. Some people notice relief within a few weeks of learning new skills, while others prefer a longer, deeper journey. We check in regularly about your goals and adjust as we go.',
      },
      {
        q: 'Will I have to talk about everything right away?',
        a: 'No. You set the pace. We begin with what feels most pressing and go deeper only when you are ready.',
      },
      {
        q: 'Does anxiety therapy work online?',
        a: 'For many people, yes. Skills-based approaches like CBT translate well to video sessions, and many clients feel more relaxed in their own space.',
      },
    ],
    related: ['depression-therapy', 'trauma-therapy', 'faith-informed-therapy'],
  },
  {
    slug: 'depression-therapy',
    navTitle: 'Depression Therapy',
    metaTitle: 'Online Depression Therapy in Florida | Dear You Counseling',
    metaDescription:
      'Gentle, culturally sensitive, faith-informed online depression therapy for adults across Florida. Start with a free 15-minute consultation.',
    eyebrow: 'Depression',
    h1: 'Online Depression Therapy in Florida',
    intro:
      'When everything feels heavy, simply getting through the day can take all the energy you have. You do not have to carry that alone. I offer culturally sensitive, faith-informed online depression therapy for adults across Florida, with gentle support that meets you where you are.',
    whoHeading: 'Who online depression therapy can help',
    who: [
      'Depression is more than sadness. It can look like exhaustion, numbness, irritability, or a sense that nothing matters the way it used to. Many people live with it quietly for a long time because they stay busy, keep showing up for others, or worry that their struggles are not serious enough to deserve help. They are.',
      'Online therapy can be especially helpful when low energy makes leaving the house feel impossible. If you are an adult located in Florida, you can meet with me from your own space, on days that feel manageable and on days that do not.',
    ],
    signsHeading: 'Common signs of depression',
    signs: [
      'Persistent sadness, emptiness, or feeling numb',
      'Losing interest in things you used to enjoy',
      'Changes in sleep or appetite',
      'Low energy, or feeling tired even after resting',
      'Trouble concentrating or making decisions',
      'Feeling guilty, worthless, or like a burden to others',
      'Pulling away from friends, family, or community',
    ],
    approachHeading: 'How I approach depression',
    approachIntro:
      'Healing from depression rarely happens all at once. We work in small, realistic steps that fit your energy and your life.',
    approaches: [
      {
        name: 'Cognitive Behavioral Therapy (CBT)',
        text: 'CBT explores the link between thoughts, feelings, and behavior. When depression tells you that nothing will help, we look at that thought together. We then build small, doable steps, like gentle routines and activities that bring back a sense of purpose, one at a time.',
      },
      {
        name: 'Strengths-based therapy',
        text: 'Depression can hide what is good about you. We look for the resilience, relationships, and values that have carried you before, and we use them as footholds as you move toward hope.',
      },
      {
        name: 'Trauma-informed care',
        text: 'Low mood is often connected to loss, stress, or painful experiences. We approach your story with care, and I will never push you to revisit anything before you are ready.',
      },
    ],
    sessionsHeading: 'What online depression therapy sessions look like',
    sessions: [
      'Sessions are 50 minutes over a secure video platform. In the first session, we talk about what you have been experiencing, how long it has been going on, and what you would like to feel more of. There is no wrong way to begin, and you do not need to have the right words.',
      'In the weeks that follow, we set goals that feel reachable, check in on how things are going, and adjust when a week is harder than expected. If you ever have thoughts of harming yourself, please call or text 988 or call 911 right away. Online therapy is not an emergency service.',
    ],
    faqs: [
      {
        q: 'Do I need to feel "bad enough" to start therapy?',
        a: 'Not at all. If something feels heavy or different, that is reason enough to reach out. You do not have to wait for a crisis.',
      },
      {
        q: 'Can therapy help if I have felt this way for a long time?',
        a: 'Many people find that support helps even when low mood has been present for years. We take it one step at a time, and I will never rush you.',
      },
      {
        q: 'Do you prescribe medication?',
        a: 'No. I am a clinical social work intern and do not prescribe medication. If it seems helpful, I can talk with you about whether to speak with your doctor or another prescriber.',
      },
    ],
    related: ['anxiety-therapy', 'life-transitions', 'faith-informed-therapy'],
  },
  {
    slug: 'trauma-therapy',
    navTitle: 'Trauma Therapy',
    metaTitle: 'Online Trauma Therapy in Florida | Dear You Counseling',
    metaDescription:
      'Trauma-informed, culturally sensitive online trauma therapy for adults across Florida, paced by you. Start with a free 15-minute consultation.',
    eyebrow: 'Trauma',
    h1: 'Online Trauma Therapy in Florida',
    intro:
      'Healing happens at your pace. I offer culturally sensitive, faith-informed online trauma therapy for adults across Florida, using a trauma-informed approach that puts your safety, trust, and choices first.',
    whoHeading: 'Who online trauma therapy can help',
    who: [
      'Trauma is not defined only by what happened. It is also about how your mind and body responded, and how those responses may still show up today. People come to trauma therapy after childhood hardship, loss, accidents, abuse, medical events, violence, or long seasons of stress that never fully let up. Some can name exactly what happened. Others only know that something has felt unsettled for a long time.',
      'Meeting online can feel safer for some people, since you can sit in a place that already feels familiar and private. If you are an adult located in Florida, you can begin trauma therapy without having to go anywhere.',
    ],
    signsHeading: 'Common signs of trauma',
    signs: [
      'Unwanted memories, nightmares, or flashbacks',
      'Feeling jumpy, on guard, or easily startled',
      'Avoiding reminders of what happened',
      'Feeling numb, detached, or disconnected from people',
      'Strong feelings of shame, guilt, or self-blame',
      'Difficulty trusting others or feeling safe in relationships',
      'Trouble sleeping or concentrating',
    ],
    approachHeading: 'How I approach trauma',
    approachIntro:
      'Trauma-informed care is the foundation of everything I do, and it shapes how I use every other tool.',
    approaches: [
      {
        name: 'Trauma-informed care',
        text: 'Safety, trust, choice, and collaboration guide every session. You will never be pressured to share details of painful experiences, and we can slow down or pause whenever you need.',
      },
      {
        name: 'Cognitive Behavioral Therapy (CBT)',
        text: 'We begin by building coping skills, such as grounding and calming strategies. Then, when you are ready, we look at the beliefs trauma can leave behind, like "it was my fault" or "I am not safe," and work to shift them with care.',
      },
      {
        name: 'Strengths-based therapy',
        text: 'Surviving took strength. We recognize what you did to get through, and we build on the resources, relationships, and beliefs that help you feel steady.',
      },
    ],
    sessionsHeading: 'What online trauma therapy sessions look like',
    sessions: [
      'Sessions are 50 minutes over a secure video platform. Early on, we focus on safety and stability: how you are sleeping, what helps you calm down, and who supports you. Only when you feel ready do we begin working with difficult memories or beliefs, and always at a pace you choose.',
      'We also make a plan together for what to do if a session feels like too much, such as grounding techniques or taking a pause. If you do not have a private space at home, tell me and we will think it through together. Online therapy is not an emergency service. If you are in crisis, call or text 988 or call 911.',
    ],
    faqs: [
      {
        q: 'Do I have to talk about what happened?',
        a: 'No. You decide what to share and when. Many people begin by focusing on how they are feeling today, and that is a perfectly good place to start.',
      },
      {
        q: 'How do I know if what I went through counts as trauma?',
        a: 'If it is still affecting you, it matters. You do not need to compare your experience to anyone else to deserve support.',
      },
      {
        q: 'Is online therapy a safe way to do trauma work?',
        a: 'Many people find it comfortable to meet from a familiar, private space. We plan ahead for how to handle hard moments, and we can talk about whether online sessions feel right for you.',
      },
    ],
    related: ['anxiety-therapy', 'depression-therapy', 'faith-informed-therapy'],
  },
  {
    slug: 'life-transitions',
    navTitle: 'Life Transitions',
    metaTitle: 'Online Therapy for Life Transitions in Florida | Dear You Counseling',
    metaDescription:
      'Online therapy for life transitions, from career changes to loss and relocation, for adults across Florida. Free 15-minute consultation.',
    eyebrow: 'Life transitions',
    h1: 'Online Therapy for Life Transitions in Florida',
    intro:
      'Even welcome changes can leave you feeling unsteady. I offer culturally sensitive, faith-informed online therapy for adults across Florida who are moving through a season of change and want clarity, resilience, and support along the way.',
    whoHeading: 'Who online therapy for life transitions can help',
    who: [
      'Transitions come in many forms: finishing school, starting or leaving a career, moving to or within Florida, getting married or separated, becoming a parent, caring for a family member, losing someone you love, or stepping into a new stage of life. I work with adults of all ages, including young adults figuring out what comes next.',
      'You do not need to be in crisis to talk with someone. Online therapy can give you a steady place to think out loud, sort through mixed feelings, and make decisions that fit who you want to be, all from a space that is already yours.',
    ],
    signsHeading: 'Common signs you may be in a difficult transition',
    signs: [
      'Feeling stuck, restless, or unsure who you are in this new chapter',
      'Grief for the life or routine you left behind',
      'Excitement and dread at the same time',
      'Difficulty making decisions, big or small',
      'Stress, trouble sleeping, or changes in mood',
      'Feeling isolated after a move or loss of community',
      'Wondering whether you are handling it "the right way"',
    ],
    approachHeading: 'How I approach life transitions',
    approachIntro:
      'There is no single right way through change, so we shape our work around your values, your pace, and the season you are in.',
    approaches: [
      {
        name: 'Cognitive Behavioral Therapy (CBT)',
        text: 'We look at the stories you are telling yourself about the change, such as "I should be further along by now," and practice more balanced ways of seeing it. CBT also gives you practical tools for decisions and for managing stress as things shift.',
      },
      {
        name: 'Strengths-based therapy',
        text: 'You have navigated change before. We identify what helped you then, along with your values, relationships, and faith, and use them as a compass for what comes next.',
      },
      {
        name: 'Trauma-informed care',
        text: 'Some transitions come from loss or painful circumstances. We make room for grief and difficult emotions without rushing you toward "moving on."',
      },
    ],
    sessionsHeading: 'What online sessions for life transitions look like',
    sessions: [
      'Sessions are 50 minutes over a secure video platform. In our first meeting, we talk about what is changing, what you are feeling, and what you hope will look different in a few months. From there, we set goals together, whether that is making a decision, rebuilding routine, or simply feeling less alone.',
      'Many clients like having sessions during a busy or uncertain season because they can fit them into real life, without travel. If you recently moved to Florida, you are welcome to meet online as long as you are located in the state during your sessions.',
    ],
    faqs: [
      {
        q: 'Is my change "big enough" for therapy?',
        a: 'If it is weighing on you, it is big enough. Transitions do not have to look dramatic to be hard.',
      },
      {
        q: 'Can you help me make a decision?',
        a: 'I will not make it for you, but we can clarify your values, your options, and your worries so you can choose with more confidence.',
      },
      {
        q: 'I just moved to Florida. Can we meet online?',
        a: 'Yes, as long as you are located in Florida during your sessions. A new place can be a lot, and having support right away can help.',
      },
    ],
    related: ['anxiety-therapy', 'depression-therapy', 'faith-informed-therapy'],
  },
  {
    slug: 'faith-informed-therapy',
    navTitle: 'Faith-Informed Therapy',
    metaTitle: 'Faith-Informed Online Therapy in Florida | Dear You Counseling',
    metaDescription:
      'Culturally sensitive, faith-informed online therapy for adults in Florida. Faith is included only if you want it, and you always decide.',
    eyebrow: 'Faith-informed care',
    h1: 'Faith-Informed Online Therapy in Florida',
    intro:
      'Your faith, culture, and family traditions are part of who you are. I offer culturally sensitive, faith-informed online therapy for adults across Florida, where your beliefs are welcomed when you want them in the room and respected when you do not.',
    whoHeading: 'Who faith-informed online therapy can help',
    who: [
      'For many people, faith is a source of comfort and strength. For others, it is complicated, tied to hurt, doubt, or pressure. Therapy that overlooks your beliefs can feel incomplete, and therapy that assumes them can feel uncomfortable. Faith-informed care simply means that I follow your lead.',
      'I work with adults across Florida from many cultural and faith backgrounds, and with people who have no faith at all. My role is not to teach or to counsel you spiritually. It is to provide a warm, respectful space where all of who you are is understood.',
    ],
    signsHeading: 'You may be a good fit if',
    signs: [
      'You want your faith to be part of your healing',
      'You want your culture and family background to be understood, not explained',
      'You prefer fully secular sessions, without prayer or scripture',
      'You feel torn between family or faith expectations and your own needs',
      'You are questioning, rebuilding, or returning to your faith',
      'You worry a therapist might dismiss or judge your beliefs',
      'You want a pace and style that feel right for you',
    ],
    approachHeading: 'How I approach faith-informed care',
    approachIntro:
      'The guiding principle is simple: you are in charge of how much faith and culture are part of our work, and you can change your mind at any time.',
    approaches: [
      {
        name: 'Faith only if you want it',
        text: 'For clients who desire it, faith can be thoughtfully integrated as a source of strength and meaning. For those who prefer not to, sessions remain fully secular. Neither is better, and you always decide.',
      },
      {
        name: 'Culturally sensitive care',
        text: 'I ask about your background rather than assuming it. Your culture, family traditions, and community shape how you experience the world, and they are welcomed and respected in our work.',
      },
      {
        name: 'Evidence-based tools',
        text: 'Whatever role faith plays, our work draws on Cognitive Behavioral Therapy, strengths-based therapy, and trauma-informed care, so you receive practical support that is tailored to your pace and needs.',
      },
    ],
    sessionsHeading: 'What faith-informed online sessions look like',
    sessions: [
      'Sessions are 50 minutes over a secure video platform. Early on, I will ask about the role that faith and culture play in your life, and you can tell me how, if at all, you would like them included. Some clients like to draw on their values or practices as a source of strength. Others prefer a fully secular approach. Either is welcome.',
      'Nothing is expected of you, and I will never impose beliefs. If your needs or comfort level change as we go, just let me know and we will adjust. Online sessions also let you meet from a space where you feel at home, which can make it easier to be open.',
    ],
    faqs: [
      {
        q: 'Do I have to be religious to work with you?',
        a: 'No. Faith is included only if you want it. Many clients choose fully secular sessions, and that is completely welcome.',
      },
      {
        q: 'Is this the same as pastoral or religious counseling?',
        a: 'No. Faith-informed therapy is clinical care that respects your beliefs. I do not provide spiritual direction or pastoral counseling.',
      },
      {
        q: 'What if my faith is part of what is hard right now?',
        a: 'That is something we can explore gently, without judgment. You can bring doubt, anger, or questions, and you will not be told what to believe.',
      },
    ],
    related: ['anxiety-therapy', 'trauma-therapy', 'life-transitions'],
  },
]

export function getSpecialtyPage(slug: string) {
  return specialtyPages.find((page) => page.slug === slug)
}

export function specialtyWordCount(page: SpecialtyPageContent) {
  const text = [
    page.intro,
    page.whoHeading,
    ...page.who,
    page.signsHeading,
    ...page.signs,
    page.approachHeading,
    page.approachIntro,
    ...page.approaches.flatMap((a) => [a.name, a.text]),
    page.sessionsHeading,
    ...page.sessions,
    ...page.faqs.flatMap((f) => [f.q, f.a]),
  ].join(' ')
  return text.split(/\s+/).filter(Boolean).length
}
