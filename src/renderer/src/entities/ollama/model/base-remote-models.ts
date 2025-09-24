import { ItemResponseLike } from '@common/entities/ollama'

export const baseRemoteModels: ItemResponseLike[] = [
  {
    name: 'gpt-oss',
    model: 'gpt-oss',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '20B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/gpt-oss',
      tags: []
    }
  },
  {
    name: 'deepseek-r1',
    model: 'deepseek-r1',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'deepseek'],
      parameter_size: '5B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/deepseek-r1',
      tags: [
        {
          tag: 'deepseek-r1:671b'
        },
        {
          tag: 'deepseek-r1:8b'
        },
        {
          tag: 'deepseek-r1:1.5b'
        },
        {
          tag: 'deepseek-r1:7b'
        },
        {
          tag: 'deepseek-r1:14b'
        },
        {
          tag: 'deepseek-r1:32b'
        },
        {
          tag: 'deepseek-r1:70b'
        }
      ]
    }
  },
  {
    name: 'gemma3',
    model: 'gemma3',
    details: {
      family: 'llama',
      families: ['llama', 'gemma'],
      parameter_size: '1B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/gemma3',
      tags: [
        {
          tag: 'gemma3:270m'
        },
        {
          tag: 'gemma3:1b'
        },
        {
          tag: 'gemma3:4b'
        },
        {
          tag: 'gemma3:12b'
        },
        {
          tag: 'gemma3:27b'
        },
        {
          tag: 'gemma3:1b-it-qat'
        },
        {
          tag: 'gemma3:4b-it-qat'
        },
        {
          tag: 'gemma3:12b-it-qat'
        },
        {
          tag: 'gemma3:27b-it-qat'
        }
      ]
    }
  },
  {
    name: 'embeddinggemma',
    model: 'embeddinggemma',
    details: {
      family: 'llama',
      families: ['llama', 'gemma'],
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/embeddinggemma',
      tags: []
    }
  },
  {
    name: 'qwen3',
    model: 'qwen3',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'qwen2', 'qwen2.5', 'deepseek', 'yi'],
      parameter_size: '6B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/qwen3',
      tags: [
        {
          tag: 'qwen3:30b'
        },
        {
          tag: 'qwen3:235b'
        }
      ]
    }
  },
  {
    name: 'deepseek-v3.1',
    model: 'deepseek-v3.1',
    details: {
      family: 'llama',
      families: ['llama', 'deepseek'],
      parameter_size: '671B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/deepseek-v3.1',
      tags: []
    }
  },
  {
    name: 'llama3.1',
    model: 'llama3.1',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama3.1',
      tags: []
    }
  },
  {
    name: 'nomic-embed-text',
    model: 'nomic-embed-text',
    details: {
      family: 'llama',
      families: ['llama'],
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/nomic-embed-text',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'llama3.2',
    model: 'llama3.2',
    details: {
      family: 'llama',
      families: ['llama', 'gemma', 'phi'],
      parameter_size: '1B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama3.2',
      tags: [
        {
          tag: 'llama3.2:1b'
        }
      ]
    }
  },
  {
    name: 'mistral',
    model: 'mistral',
    details: {
      family: 'llama',
      families: ['llama', 'mistral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/mistral',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'qwen2.5',
    model: 'qwen2.5',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'qwen2', 'qwen2.5'],
      parameter_size: '5B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/qwen2.5',
      tags: []
    }
  },
  {
    name: 'llama3',
    model: 'llama3',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama3',
      title: 'Llama 3',
      tags: [
        {
          tag: 'localhost:11434'
        },
        {
          tag: 'llama3:70b'
        },
        {
          tag: 'llama3:text'
        },
        {
          tag: 'llama3:70b-text'
        }
      ]
    }
  },
  {
    name: 'phi3',
    model: 'phi3',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '3B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/phi3',
      tags: [
        {
          tag: 'phi3:mini'
        },
        {
          tag: 'phi3:medium'
        },
        {
          tag: 'phi3:medium-128k'
        }
      ]
    }
  },
  {
    name: 'llava',
    model: 'llava',
    details: {
      family: 'llama',
      families: ['llama', 'yi', 'aya', 'llava'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llava',
      title: '🌋 LLaVA: Large Language and Vision Assistant',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'gemma2',
    model: 'gemma2',
    details: {
      family: 'llama',
      families: ['llama', 'gemma'],
      parameter_size: '2B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/gemma2',
      tags: [
        {
          tag: 'gemma2:2b'
        },
        {
          tag: 'gemma2:27b'
        }
      ]
    }
  },
  {
    name: 'qwen2.5-coder',
    model: 'qwen2.5-coder',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'qwen2', 'qwen2.5', 'yi'],
      parameter_size: '5B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/qwen2.5-coder',
      tags: [
        {
          tag: 'qwen2.5-coder:32b'
        },
        {
          tag: 'qwen2.5-coder:14b'
        },
        {
          tag: 'qwen2.5-coder:7b'
        },
        {
          tag: 'qwen2.5-coder:3b'
        },
        {
          tag: 'qwen2.5-coder:1.5b'
        },
        {
          tag: 'qwen2.5-coder:0.5b'
        }
      ]
    }
  },
  {
    name: 'gemma',
    model: 'gemma',
    details: {
      family: 'llama',
      families: ['llama', 'gemma'],
      parameter_size: '2B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/gemma',
      title: 'Reference',
      tags: [
        {
          tag: 'gemma:2b'
        },
        {
          tag: 'gemma:7b'
        }
      ]
    }
  },
  {
    name: 'mxbai-embed-large',
    model: 'mxbai-embed-large',
    details: {
      family: 'llama',
      families: ['llama'],
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/mxbai-embed-large',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'qwen',
    model: 'qwen',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'yi'],
      parameter_size: '5B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/qwen',
      tags: [
        {
          tag: 'qwen:0.5b'
        },
        {
          tag: 'qwen:1.8b'
        },
        {
          tag: 'qwen:4b'
        },
        {
          tag: 'qwen:7b'
        },
        {
          tag: 'qwen:14b'
        },
        {
          tag: 'qwen:32b'
        },
        {
          tag: 'qwen:72b'
        },
        {
          tag: 'qwen:110b'
        }
      ]
    }
  },
  {
    name: 'phi4',
    model: 'phi4',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '14B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/phi4',
      tags: []
    }
  },
  {
    name: 'qwen2',
    model: 'qwen2',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'qwen2'],
      parameter_size: '5B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/qwen2',
      tags: []
    }
  },
  {
    name: 'llama2',
    model: 'llama2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama2',
      tags: [
        {
          tag: 'localhost:11434'
        },
        {
          tag: 'llama2:text'
        }
      ]
    }
  },
  {
    name: 'minicpm-v',
    model: 'minicpm-v',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'qwen2'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/minicpm-v',
      tags: []
    }
  },
  {
    name: 'codellama',
    model: 'codellama',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/codellama',
      tags: [
        {
          tag: 'codellama:7b'
        },
        {
          tag: 'codellama:13b'
        },
        {
          tag: 'codellama:34b'
        },
        {
          tag: 'codellama:70b'
        },
        {
          tag: 'localhost:11434'
        },
        {
          tag: 'codellama:7b-instruct'
        },
        {
          tag: 'codellama:7b-code'
        }
      ]
    }
  },
  {
    name: 'tinyllama',
    model: 'tinyllama',
    details: {
      family: 'llama',
      families: ['llama', 'tinyllama'],
      parameter_size: '1B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/tinyllama',
      tags: []
    }
  },
  {
    name: 'dolphin3',
    model: 'dolphin3',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/dolphin3',
      tags: []
    }
  },
  {
    name: 'olmo2',
    model: 'olmo2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/olmo2',
      tags: []
    }
  },
  {
    name: 'mistral-nemo',
    model: 'mistral-nemo',
    details: {
      family: 'llama',
      families: ['llama', 'mistral'],
      parameter_size: '12B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/mistral-nemo',
      tags: []
    }
  },
  {
    name: 'llama3.3',
    model: 'llama3.3',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '70B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama3.3',
      tags: []
    }
  },
  {
    name: 'llama3.2-vision',
    model: 'llama3.2-vision',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '11B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama3.2-vision',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'deepseek-v3',
    model: 'deepseek-v3',
    details: {
      family: 'llama',
      families: ['llama', 'deepseek'],
      parameter_size: '671B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/deepseek-v3',
      tags: []
    }
  },
  {
    name: 'bge-m3',
    model: 'bge-m3',
    details: {
      family: 'llama',
      families: ['llama'],
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/bge-m3',
      tags: []
    }
  },
  {
    name: 'mistral-small',
    model: 'mistral-small',
    details: {
      family: 'llama',
      families: ['llama', 'mistral', 'qwen', 'qwen2', 'qwen2.5', 'gemma', 'yi'],
      parameter_size: '70B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/mistral-small',
      tags: []
    }
  },
  {
    name: 'smollm2',
    model: 'smollm2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/smollm2',
      tags: []
    }
  },
  {
    name: 'llava-llama3',
    model: 'llava-llama3',
    details: {
      family: 'llama',
      families: ['llama', 'llava'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llava-llama3',
      tags: []
    }
  },
  {
    name: 'qwq',
    model: 'qwq',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'deepseek'],
      parameter_size: '32B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/qwq',
      tags: []
    }
  },
  {
    name: 'all-minilm',
    model: 'all-minilm',
    details: {
      family: 'llama',
      families: ['llama'],
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/all-minilm',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'mixtral',
    model: 'mixtral',
    details: {
      family: 'llama',
      families: ['llama', 'mistral', 'mixtral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/mixtral',
      tags: [
        {
          tag: 'mixtral:8x22b'
        },
        {
          tag: 'mixtral:8x7b'
        }
      ]
    }
  },
  {
    name: 'deepseek-coder',
    model: 'deepseek-coder',
    details: {
      family: 'llama',
      families: ['llama', 'deepseek'],
      parameter_size: '3B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/deepseek-coder',
      tags: [
        {
          tag: 'deepseek-coder:6.7b'
        },
        {
          tag: 'deepseek-coder:33b'
        },
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'starcoder2',
    model: 'starcoder2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '3B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/starcoder2',
      tags: [
        {
          tag: 'starcoder2:instruct'
        },
        {
          tag: 'starcoder2:15b'
        },
        {
          tag: 'starcoder2:7b'
        },
        {
          tag: 'starcoder2:3b'
        }
      ]
    }
  },
  {
    name: 'llama2-uncensored',
    model: 'llama2-uncensored',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama2-uncensored',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'deepseek-coder-v2',
    model: 'deepseek-coder-v2',
    details: {
      family: 'llama',
      families: ['llama', 'deepseek'],
      parameter_size: '16B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/deepseek-coder-v2',
      tags: []
    }
  },
  {
    name: 'codegemma',
    model: 'codegemma',
    details: {
      family: 'llama',
      families: ['llama', 'gemma'],
      parameter_size: '2B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/codegemma',
      tags: [
        {
          tag: 'codegemma:2b-code'
        }
      ]
    }
  },
  {
    name: 'snowflake-arctic-embed',
    model: 'snowflake-arctic-embed',
    details: {
      family: 'llama',
      families: ['llama'],
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/snowflake-arctic-embed',
      tags: [
        {
          tag: 'snowflake-arctic-embed:335m'
        },
        {
          tag: 'snowflake-arctic-embed:137m'
        },
        {
          tag: 'snowflake-arctic-embed:110m'
        },
        {
          tag: 'snowflake-arctic-embed:33m'
        },
        {
          tag: 'snowflake-arctic-embed:22m'
        }
      ]
    }
  },
  {
    name: 'orca-mini',
    model: 'orca-mini',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '3B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/orca-mini',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'phi',
    model: 'phi',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/phi',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'llama4',
    model: 'llama4',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '17B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama4',
      tags: [
        {
          tag: 'llama4:scout'
        },
        {
          tag: 'llama4:maverick'
        }
      ]
    }
  },
  {
    name: 'qwen2.5vl',
    model: 'qwen2.5vl',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'qwen2', 'qwen2.5', 'phi', 'yi'],
      parameter_size: '3B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/qwen2.5vl',
      tags: []
    }
  },
  {
    name: 'falcon3',
    model: 'falcon3',
    details: {
      family: 'llama',
      families: ['llama', 'gemma'],
      parameter_size: '10B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/falcon3',
      title: 'Key Features',
      tags: [
        {
          tag: 'falcon3:1b'
        },
        {
          tag: 'smollm2:1.7b'
        },
        {
          tag: 'gemma2:2b'
        },
        {
          tag: 'falcon3:10b'
        }
      ]
    }
  },
  {
    name: 'dolphin-mixtral',
    model: 'dolphin-mixtral',
    details: {
      family: 'llama',
      families: ['llama', 'phi', 'mixtral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/dolphin-mixtral',
      tags: [
        {
          tag: 'dolphin-mixtral:8x22b'
        },
        {
          tag: 'dolphin-mixtral:8x7b'
        }
      ]
    }
  },
  {
    name: 'granite3.1-moe',
    model: 'granite3.1-moe',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '1B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/granite3.1-moe',
      tags: [
        {
          tag: 'granite3.1-moe:1b'
        },
        {
          tag: 'granite3.1-moe:3b'
        }
      ]
    }
  },
  {
    name: 'openthinker',
    model: 'openthinker',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'qwen2', 'qwen2.5', 'deepseek'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/openthinker',
      tags: [
        {
          tag: 'openthinker:32b'
        },
        {
          tag: 'openthinker:7b'
        }
      ]
    }
  },
  {
    name: 'granite3.3',
    model: 'granite3.3',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '2B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/granite3.3',
      tags: [
        {
          tag: 'granite3.3:2b'
        },
        {
          tag: 'granite3.3:8b'
        }
      ]
    }
  },
  {
    name: 'mistral-small3.2',
    model: 'mistral-small3.2',
    details: {
      family: 'llama',
      families: ['llama', 'mistral'],
      parameter_size: '24B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/mistral-small3.2',
      tags: []
    }
  },
  {
    name: 'gemma3n',
    model: 'gemma3n',
    details: {
      family: 'llama',
      families: ['llama', 'gemma'],
      parameter_size: '2B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/gemma3n',
      tags: [
        {
          tag: 'gemma3n:e2b'
        },
        {
          tag: 'gemma3n:e4b'
        }
      ]
    }
  },
  {
    name: 'phi4-reasoning',
    model: 'phi4-reasoning',
    details: {
      family: 'llama',
      families: ['llama', 'phi', 'deepseek'],
      parameter_size: '14B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/phi4-reasoning',
      tags: [
        {
          tag: 'phi4-reasoning:plus'
        }
      ]
    }
  },
  {
    name: 'wizardlm2',
    model: 'wizardlm2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/wizardlm2',
      tags: [
        {
          tag: 'wizardlm2:7b'
        },
        {
          tag: 'wizardlm2:8x22b'
        },
        {
          tag: 'wizardlm2:70b'
        }
      ]
    }
  },
  {
    name: 'codestral',
    model: 'codestral',
    details: {
      family: 'llama',
      families: ['llama', 'mistral'],
      parameter_size: '22B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/codestral',
      title: 'Codestral',
      tags: []
    }
  },
  {
    name: 'smollm',
    model: 'smollm',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/smollm',
      tags: []
    }
  },
  {
    name: 'dolphin-llama3',
    model: 'dolphin-llama3',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/dolphin-llama3',
      title: '🐬 Dolphin 2.9 Llama 3',
      tags: [
        {
          tag: 'dolphin-llama3:8b'
        },
        {
          tag: 'dolphin-llama3:70b'
        },
        {
          tag: 'localhost:11434'
        },
        {
          tag: 'dolphin-llama3:8b-256k'
        }
      ]
    }
  },
  {
    name: 'cogito',
    model: 'cogito',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'deepseek'],
      parameter_size: '3B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/cogito',
      tags: [
        {
          tag: 'localhost:11434'
        },
        {
          tag: 'cogito:3b'
        },
        {
          tag: 'cogito:8b'
        },
        {
          tag: 'cogito:14b'
        },
        {
          tag: 'cogito:32b'
        },
        {
          tag: 'cogito:70b'
        }
      ]
    }
  },
  {
    name: 'qwen3-coder',
    model: 'qwen3-coder',
    details: {
      family: 'llama',
      families: ['llama', 'qwen'],
      parameter_size: '30B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/qwen3-coder',
      tags: [
        {
          tag: 'qwen3-coder:30b'
        }
      ]
    }
  },
  {
    name: 'magistral',
    model: 'magistral',
    details: {
      family: 'llama',
      families: ['llama', 'mistral'],
      parameter_size: '24B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/magistral',
      tags: []
    }
  },
  {
    name: 'dolphin-mistral',
    model: 'dolphin-mistral',
    details: {
      family: 'llama',
      families: ['llama', 'mistral', 'phi'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/dolphin-mistral',
      tags: []
    }
  },
  {
    name: 'phi4-mini',
    model: 'phi4-mini',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/phi4-mini',
      tags: []
    }
  },
  {
    name: 'deepscaler',
    model: 'deepscaler',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'qwen2', 'qwen2.5', 'deepseek'],
      parameter_size: '5B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/deepscaler',
      title: 'DeepScaleR',
      tags: []
    }
  },
  {
    name: 'dolphin-phi',
    model: 'dolphin-phi',
    details: {
      family: 'llama',
      families: ['llama', 'phi', 'mixtral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/dolphin-phi',
      tags: []
    }
  },
  {
    name: 'devstral',
    model: 'devstral',
    details: {
      family: 'llama',
      families: ['llama', 'mistral', 'qwen', 'deepseek'],
      parameter_size: '24B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/devstral',
      tags: []
    }
  },
  {
    name: 'command-r',
    model: 'command-r',
    details: {
      family: 'llama',
      families: ['llama', 'command-r'],
      parameter_size: '35B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/command-r',
      tags: []
    }
  },
  {
    name: 'hermes3',
    model: 'hermes3',
    details: {
      family: 'llama',
      families: ['llama', 'yi'],
      parameter_size: '3B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/hermes3',
      tags: []
    }
  },
  {
    name: 'phi3.5',
    model: 'phi3.5',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/phi3.5',
      tags: []
    }
  },
  {
    name: 'granite3.2-vision',
    model: 'granite3.2-vision',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '2B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/granite3.2-vision',
      tags: []
    }
  },
  {
    name: 'yi',
    model: 'yi',
    details: {
      family: 'llama',
      families: ['llama', 'yi'],
      parameter_size: '6B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/yi',
      tags: []
    }
  },
  {
    name: 'deepcoder',
    model: 'deepcoder',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'deepseek'],
      parameter_size: '14B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/deepcoder',
      tags: []
    }
  },
  {
    name: 'zephyr',
    model: 'zephyr',
    details: {
      family: 'llama',
      families: ['llama', 'mistral', 'mixtral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/zephyr',
      tags: [
        {
          tag: 'zephyr:141b'
        },
        {
          tag: 'zephyr:7b'
        }
      ]
    }
  },
  {
    name: 'mistral-small3.1',
    model: 'mistral-small3.1',
    details: {
      family: 'llama',
      families: ['llama', 'mistral', 'gemma'],
      parameter_size: '24B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/mistral-small3.1',
      tags: []
    }
  },
  {
    name: 'mistral-large',
    model: 'mistral-large',
    details: {
      family: 'llama',
      families: ['llama', 'mistral'],
      parameter_size: '123B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/mistral-large',
      tags: []
    }
  },
  {
    name: 'moondream',
    model: 'moondream',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/moondream',
      title: '🌔 moondream 2',
      tags: []
    }
  },
  {
    name: 'granite-code',
    model: 'granite-code',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '3B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/granite-code',
      tags: [
        {
          tag: 'granite-code:34b'
        },
        {
          tag: 'granite-code:20b'
        },
        {
          tag: 'granite-code:8b'
        },
        {
          tag: 'granite-code:3b'
        }
      ]
    }
  },
  {
    name: 'wizard-vicuna-uncensored',
    model: 'wizard-vicuna-uncensored',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/wizard-vicuna-uncensored',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'starcoder',
    model: 'starcoder',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '1B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/starcoder',
      tags: []
    }
  },
  {
    name: 'deepseek-llm',
    model: 'deepseek-llm',
    details: {
      family: 'llama',
      families: ['llama', 'deepseek'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/deepseek-llm',
      tags: []
    }
  },
  {
    name: 'vicuna',
    model: 'vicuna',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/vicuna',
      tags: []
    }
  },
  {
    name: 'openchat',
    model: 'openchat',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/openchat',
      tags: []
    }
  },
  {
    name: 'deepseek-v2',
    model: 'deepseek-v2',
    details: {
      family: 'llama',
      families: ['llama', 'deepseek'],
      parameter_size: '16B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/deepseek-v2',
      tags: [
        {
          tag: 'deepseek-v2:16b'
        },
        {
          tag: 'deepseek-v2:236b'
        }
      ]
    }
  },
  {
    name: 'mistral-openorca',
    model: 'mistral-openorca',
    details: {
      family: 'llama',
      families: ['llama', 'mistral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/mistral-openorca',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'codegeex4',
    model: 'codegeex4',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '9B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/codegeex4',
      title: 'References',
      tags: []
    }
  },
  {
    name: 'openhermes',
    model: 'openhermes',
    details: {
      family: 'llama',
      families: ['llama', 'mistral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/openhermes',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'exaone-deep',
    model: 'exaone-deep',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '4B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/exaone-deep',
      tags: []
    }
  },
  {
    name: 'nous-hermes',
    model: 'nous-hermes',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/nous-hermes',
      tags: [
        {
          tag: 'localhost:11434'
        },
        {
          tag: 'nous-hermes:13b-q4_0'
        }
      ]
    }
  },
  {
    name: 'codeqwen',
    model: 'codeqwen',
    details: {
      family: 'llama',
      families: ['llama', 'qwen'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/codeqwen',
      tags: []
    }
  },
  {
    name: 'qwen2-math',
    model: 'qwen2-math',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'qwen2'],
      parameter_size: '5B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/qwen2-math',
      tags: []
    }
  },
  {
    name: 'snowflake-arctic-embed2',
    model: 'snowflake-arctic-embed2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '1B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/snowflake-arctic-embed2',
      tags: []
    }
  },
  {
    name: 'falcon',
    model: 'falcon',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/falcon',
      tags: [
        {
          tag: 'localhost:11434'
        },
        {
          tag: 'falcon:7b'
        },
        {
          tag: 'falcon:40b'
        },
        {
          tag: 'falcon:180b'
        }
      ]
    }
  },
  {
    name: 'llama2-chinese',
    model: 'llama2-chinese',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama2-chinese',
      tags: [
        {
          tag: 'localhost:11434'
        },
        {
          tag: 'llama2-chinese:7b-chat-q4_0'
        }
      ]
    }
  },
  {
    name: 'aya',
    model: 'aya',
    details: {
      family: 'llama',
      families: ['llama', 'aya'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/aya',
      title: 'References',
      tags: [
        {
          tag: 'aya:8b'
        },
        {
          tag: 'aya:35b'
        }
      ]
    }
  },
  {
    name: 'tinydolphin',
    model: 'tinydolphin',
    details: {
      family: 'llama',
      families: ['llama', 'phi', 'tinyllama'],
      parameter_size: '1B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/tinydolphin',
      tags: []
    }
  },
  {
    name: 'glm4',
    model: 'glm4',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '9B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/glm4',
      tags: []
    }
  },
  {
    name: 'granite3.2',
    model: 'granite3.2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '2B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/granite3.2',
      tags: [
        {
          tag: 'granite3.2:2b'
        },
        {
          tag: 'granite3.2:8b'
        }
      ]
    }
  },
  {
    name: 'stable-code',
    model: 'stable-code',
    details: {
      family: 'llama',
      families: ['llama', 'deepseek', 'yi'],
      parameter_size: '3B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/stable-code',
      tags: []
    }
  },
  {
    name: 'opencoder',
    model: 'opencoder',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '5B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/opencoder',
      tags: []
    }
  },
  {
    name: 'nous-hermes2',
    model: 'nous-hermes2',
    details: {
      family: 'llama',
      families: ['llama', 'yi'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/nous-hermes2',
      tags: []
    }
  },
  {
    name: 'neural-chat',
    model: 'neural-chat',
    details: {
      family: 'llama',
      families: ['llama', 'mistral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/neural-chat',
      tags: []
    }
  },
  {
    name: 'wizardcoder',
    model: 'wizardcoder',
    details: {
      family: 'llama',
      families: ['llama', 'deepseek'],
      parameter_size: '33B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/wizardcoder',
      tags: []
    }
  },
  {
    name: 'command-r-plus',
    model: 'command-r-plus',
    details: {
      family: 'llama',
      families: ['llama', 'phi', 'command-r'],
      parameter_size: '104B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/command-r-plus',
      tags: []
    }
  },
  {
    name: 'bakllava',
    model: 'bakllava',
    details: {
      family: 'llama',
      families: ['llama', 'mistral', 'yi', 'aya', 'llava'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/bakllava',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'bge-large',
    model: 'bge-large',
    details: {
      family: 'llama',
      families: ['llama'],
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/bge-large',
      tags: []
    }
  },
  {
    name: 'sqlcoder',
    model: 'sqlcoder',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/sqlcoder',
      tags: []
    }
  },
  {
    name: 'stablelm2',
    model: 'stablelm2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '6B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/stablelm2',
      tags: []
    }
  },
  {
    name: 'yi-coder',
    model: 'yi-coder',
    details: {
      family: 'llama',
      families: ['llama', 'yi'],
      parameter_size: '5B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/yi-coder',
      tags: [
        {
          tag: 'yi-coder:9b'
        },
        {
          tag: 'yi-coder:1.5b'
        },
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'llama3-chatqa',
    model: 'llama3-chatqa',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama3-chatqa',
      tags: [
        {
          tag: 'llama3-chatqa:8b'
        },
        {
          tag: 'llama3-chatqa:70b'
        }
      ]
    }
  },
  {
    name: 'llava-phi3',
    model: 'llava-phi3',
    details: {
      family: 'llama',
      families: ['llama', 'phi', 'llava', 'llava-phi'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llava-phi3',
      tags: []
    }
  },
  {
    name: 'granite3.1-dense',
    model: 'granite3.1-dense',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '2B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/granite3.1-dense',
      tags: [
        {
          tag: 'granite3.1-dense:2b'
        },
        {
          tag: 'granite3.1-dense:8b'
        }
      ]
    }
  },
  {
    name: 'granite3-dense',
    model: 'granite3-dense',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '2B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/granite3-dense',
      tags: [
        {
          tag: 'granite3-dense:2b'
        },
        {
          tag: 'granite3-dense:8b'
        }
      ]
    }
  },
  {
    name: 'wizard-math',
    model: 'wizard-math',
    details: {
      family: 'llama',
      families: ['llama', 'mistral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/wizard-math',
      tags: []
    }
  },
  {
    name: 'reflection',
    model: 'reflection',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '70B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/reflection',
      tags: []
    }
  },
  {
    name: 'exaone3.5',
    model: 'exaone3.5',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '4B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/exaone3.5',
      tags: []
    }
  },
  {
    name: 'llama3-gradient',
    model: 'llama3-gradient',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama3-gradient',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'dbrx',
    model: 'dbrx',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '132B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/dbrx',
      tags: []
    }
  },
  {
    name: 'r1-1776',
    model: 'r1-1776',
    details: {
      family: 'llama',
      families: ['llama', 'phi', 'deepseek', 'yi'],
      parameter_size: '70B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/r1-1776',
      tags: []
    }
  },
  {
    name: 'dolphincoder',
    model: 'dolphincoder',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/dolphincoder',
      tags: []
    }
  },
  {
    name: 'samantha-mistral',
    model: 'samantha-mistral',
    details: {
      family: 'llama',
      families: ['llama', 'mistral', 'phi', 'yi'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/samantha-mistral',
      tags: []
    }
  },
  {
    name: 'nemotron-mini',
    model: 'nemotron-mini',
    details: {
      family: 'llama',
      families: ['llama', 'nemotron', 'yi'],
      parameter_size: '4B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/nemotron-mini',
      tags: []
    }
  },
  {
    name: 'tulu3',
    model: 'tulu3',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/tulu3',
      tags: []
    }
  },
  {
    name: 'paraphrase-multilingual',
    model: 'paraphrase-multilingual',
    details: {
      family: 'llama',
      families: ['llama'],
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/paraphrase-multilingual',
      tags: []
    }
  },
  {
    name: 'starling-lm',
    model: 'starling-lm',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/starling-lm',
      tags: []
    }
  },
  {
    name: 'internlm2',
    model: 'internlm2',
    details: {
      family: 'llama',
      families: ['llama', 'gemma'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/internlm2',
      tags: []
    }
  },
  {
    name: 'phind-codellama',
    model: 'phind-codellama',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '34B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/phind-codellama',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'solar',
    model: 'solar',
    details: {
      family: 'llama',
      families: ['llama', 'mistral', 'mixtral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/solar',
      tags: []
    }
  },
  {
    name: 'granite-embedding',
    model: 'granite-embedding',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '2B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/granite-embedding',
      tags: [
        {
          tag: 'granite-embedding:30m'
        },
        {
          tag: 'granite-embedding:278m'
        }
      ]
    }
  },
  {
    name: 'xwinlm',
    model: 'xwinlm',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/xwinlm',
      tags: []
    }
  },
  {
    name: 'athene-v2',
    model: 'athene-v2',
    details: {
      family: 'llama',
      families: ['llama', 'qwen'],
      parameter_size: '72B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/athene-v2',
      title: 'Athene-V2',
      tags: []
    }
  },
  {
    name: 'nemotron',
    model: 'nemotron',
    details: {
      family: 'llama',
      families: ['llama', 'nemotron'],
      parameter_size: '70B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/nemotron',
      tags: []
    }
  },
  {
    name: 'llama3-groq-tool-use',
    model: 'llama3-groq-tool-use',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama3-groq-tool-use',
      tags: []
    }
  },
  {
    name: 'yarn-llama2',
    model: 'yarn-llama2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/yarn-llama2',
      tags: [
        {
          tag: 'yarn-llama2:7b-128k'
        },
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'meditron',
    model: 'meditron',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/meditron',
      tags: []
    }
  },
  {
    name: 'granite3-moe',
    model: 'granite3-moe',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '1B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/granite3-moe',
      tags: [
        {
          tag: 'granite3-moe:1b'
        },
        {
          tag: 'granite3-moe:3b'
        }
      ]
    }
  },
  {
    name: 'wizardlm-uncensored',
    model: 'wizardlm-uncensored',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '13B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/wizardlm-uncensored',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'aya-expanse',
    model: 'aya-expanse',
    details: {
      family: 'llama',
      families: ['llama', 'aya'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/aya-expanse',
      tags: []
    }
  },
  {
    name: 'llama-guard3',
    model: 'llama-guard3',
    details: {
      family: 'llama',
      families: ['llama', 'yi'],
      parameter_size: '1B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama-guard3',
      tags: [
        {
          tag: 'llama-guard3:1b'
        },
        {
          tag: 'llama-guard3:8b'
        },
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'smallthinker',
    model: 'smallthinker',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'qwen2', 'qwen2.5', 'yi'],
      parameter_size: '3B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/smallthinker',
      tags: []
    }
  },
  {
    name: 'wizardlm',
    model: 'wizardlm',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/wizardlm',
      tags: [
        {
          tag: 'localhost:11434'
        },
        {
          tag: 'wizardlm:70b-llama2-q4_0'
        }
      ]
    }
  },
  {
    name: 'orca2',
    model: 'orca2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/orca2',
      tags: [
        {
          tag: 'orca2:13b'
        },
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'medllama2',
    model: 'medllama2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/medllama2',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'nous-hermes2-mixtral',
    model: 'nous-hermes2-mixtral',
    details: {
      family: 'llama',
      families: ['llama', 'mixtral', 'yi'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/nous-hermes2-mixtral',
      tags: []
    }
  },
  {
    name: 'stable-beluga',
    model: 'stable-beluga',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/stable-beluga',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'deepseek-v2.5',
    model: 'deepseek-v2.5',
    details: {
      family: 'llama',
      families: ['llama', 'deepseek'],
      parameter_size: '236B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/deepseek-v2.5',
      tags: []
    }
  },
  {
    name: 'reader-lm',
    model: 'reader-lm',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '5B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/reader-lm',
      tags: []
    }
  },
  {
    name: 'llama-pro',
    model: 'llama-pro',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/llama-pro',
      tags: []
    }
  },
  {
    name: 'phi4-mini-reasoning',
    model: 'phi4-mini-reasoning',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'phi', 'deepseek', 'yi'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/phi4-mini-reasoning',
      tags: []
    }
  },
  {
    name: 'command-r7b',
    model: 'command-r7b',
    details: {
      family: 'llama',
      families: ['llama', 'phi', 'command-r'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/command-r7b',
      tags: []
    }
  },
  {
    name: 'yarn-mistral',
    model: 'yarn-mistral',
    details: {
      family: 'llama',
      families: ['llama', 'mistral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/yarn-mistral',
      tags: [
        {
          tag: 'yarn-mistral:7b-128k'
        },
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'shieldgemma',
    model: 'shieldgemma',
    details: {
      family: 'llama',
      families: ['llama', 'gemma'],
      parameter_size: '2B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/shieldgemma',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'command-a',
    model: 'command-a',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '111B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/command-a',
      tags: []
    }
  },
  {
    name: 'mathstral',
    model: 'mathstral',
    details: {
      family: 'llama',
      families: ['llama', 'mistral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/mathstral',
      tags: []
    }
  },
  {
    name: 'nexusraven',
    model: 'nexusraven',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '13B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/nexusraven',
      tags: []
    }
  },
  {
    name: 'everythinglm',
    model: 'everythinglm',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '13B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/everythinglm',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'codeup',
    model: 'codeup',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '13B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/codeup',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'marco-o1',
    model: 'marco-o1',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/marco-o1',
      tags: []
    }
  },
  {
    name: 'stablelm-zephyr',
    model: 'stablelm-zephyr',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '3B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/stablelm-zephyr',
      tags: []
    }
  },
  {
    name: 'solar-pro',
    model: 'solar-pro',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '22B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/solar-pro',
      tags: []
    }
  },
  {
    name: 'duckdb-nsql',
    model: 'duckdb-nsql',
    details: {
      family: 'llama',
      families: ['llama', 'mixtral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/duckdb-nsql',
      tags: [
        {
          tag: 'localhost:11434'
        },
        {
          tag: 'duckdb-nsql:7b-q4_0'
        }
      ]
    }
  },
  {
    name: 'falcon2',
    model: 'falcon2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '11B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/falcon2',
      tags: []
    }
  },
  {
    name: 'magicoder',
    model: 'magicoder',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/magicoder',
      title: '🎩',
      tags: []
    }
  },
  {
    name: 'mistrallite',
    model: 'mistrallite',
    details: {
      family: 'llama',
      families: ['llama', 'mistral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/mistrallite',
      tags: []
    }
  },
  {
    name: 'codebooga',
    model: 'codebooga',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '34B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/codebooga',
      tags: []
    }
  },
  {
    name: 'bespoke-minicheck',
    model: 'bespoke-minicheck',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/bespoke-minicheck',
      tags: []
    }
  },
  {
    name: 'nuextract',
    model: 'nuextract',
    details: {
      family: 'llama',
      families: ['llama', 'mistral', 'phi'],
      parameter_size: '8B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/nuextract',
      tags: []
    }
  },
  {
    name: 'wizard-vicuna',
    model: 'wizard-vicuna',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '13B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/wizard-vicuna',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'granite3-guardian',
    model: 'granite3-guardian',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '2B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/granite3-guardian',
      tags: [
        {
          tag: 'granite3-guardian:2b'
        },
        {
          tag: 'granite3-guardian:8b'
        }
      ]
    }
  },
  {
    name: 'megadolphin',
    model: 'megadolphin',
    details: {
      family: 'llama',
      families: ['llama', 'phi'],
      parameter_size: '120B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/megadolphin',
      tags: []
    }
  },
  {
    name: 'notux',
    model: 'notux',
    details: {
      family: 'llama',
      families: ['llama', 'mixtral'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/notux',
      tags: []
    }
  },
  {
    name: 'open-orca-platypus2',
    model: 'open-orca-platypus2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '13B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/open-orca-platypus2',
      tags: [
        {
          tag: 'localhost:11434'
        }
      ]
    }
  },
  {
    name: 'notus',
    model: 'notus',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/notus',
      tags: []
    }
  },
  {
    name: 'sailor2',
    model: 'sailor2',
    details: {
      family: 'llama',
      families: ['llama', 'qwen', 'qwen2', 'qwen2.5'],
      parameter_size: '1B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/sailor2',
      tags: []
    }
  },
  {
    name: 'firefunction-v2',
    model: 'firefunction-v2',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '70B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/firefunction-v2',
      tags: []
    }
  },
  {
    name: 'goliath',
    model: 'goliath',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '70B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/goliath',
      tags: []
    }
  },
  {
    name: 'alfred',
    model: 'alfred',
    details: {
      family: 'llama',
      families: ['llama'],
      parameter_size: '40B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/alfred',
      tags: []
    }
  },
  {
    name: 'command-r7b-arabic',
    model: 'command-r7b-arabic',
    details: {
      family: 'llama',
      families: ['llama', 'command-r'],
      parameter_size: '7B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/command-r7b-arabic',
      tags: []
    }
  },
  {
    name: 'qwen3-embedding',
    model: 'qwen3-embedding',
    details: {
      family: 'llama',
      families: ['llama', 'qwen'],
      parameter_size: '6B',
      modalities: ['text']
    },
    remote: {
      url: 'https://ollama.com/library/qwen3-embedding',
      tags: []
    }
  }
]
