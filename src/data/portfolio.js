export const profile = {
  name: 'Jane Doe',
  role: 'Machine Learning Engineer',
  tagline: 'I build and ship ML models that solve real problems.',
  bio: "I'm a machine learning engineer with a focus on taking models from notebook to production. I care about clean data pipelines, reproducible experiments, and models that hold up outside the training set.",
  location: 'Remote',
  email: 'jane.doe@example.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/yourusername' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
    { label: 'X', href: 'https://x.com/yourusername' },
  ],
}

export const skills = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'scikit-learn',
  'SQL',
  'Docker',
  'AWS',
  'MLflow',
]

export const projects = [
  {
    title: 'Demand Forecasting Pipeline',
    description:
      'End-to-end pipeline that ingests retail sales data, trains a gradient-boosted forecasting model, and serves predictions via a REST API.',
    tags: ['Python', 'XGBoost', 'Airflow'],
    href: 'https://github.com/yourusername/demand-forecasting',
  },
  {
    title: 'Image Classification Service',
    description:
      'Fine-tuned a vision transformer for defect detection on manufacturing line images, deployed behind a FastAPI service with sub-100ms latency.',
    tags: ['PyTorch', 'FastAPI', 'Docker'],
    href: 'https://github.com/yourusername/defect-detection',
  },
  {
    title: 'Customer Churn Model',
    description:
      'Built a churn prediction model and dashboard used by the customer success team to prioritize outreach, improving retention by 8%.',
    tags: ['scikit-learn', 'SQL', 'Streamlit'],
    href: 'https://github.com/yourusername/churn-model',
  },
]
