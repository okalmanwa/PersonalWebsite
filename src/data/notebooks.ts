export interface Notebook {
  slug: string;
  title: string;
  stack: string;
  blurb: string;
  file: string;
}

export const notebooks: Notebook[] = [
  {
    slug: 'backprop',
    title: 'Backprop on MNIST',
    stack: 'NumPy',
    blurb:
      'A two-layer neural network with manual forward pass, backpropagation, and mini-batch training on MNIST.',
    file: 'backprop.ipynb',
  },
  {
    slug: 'transformer',
    title: 'Transformer from Scratch',
    stack: 'PyTorch',
    blurb:
      'Core transformer blocks built step by step: tokenization, embeddings, causal self-attention, and stacked decoder layers.',
    file: 'transformer.ipynb',
  },
];
