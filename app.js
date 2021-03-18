

const codonTable = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

export const translate = (rna) => {
  if(!rna) return []
  if(/[^ACGU]/.test(rna)){
    throw new Error('Invalid codon');
  }
  let proteins=[]
  let codons=rna.match(/\w{3}/g);

 

  for(let codon of codons){
    
    if(codonTable.hasOwnProperty(codon)){

     if(codonTable[codon]==="STOP"){
       break;
     }else{
       proteins.push(codonTable[codon])
     }

    }else{
      throw new Error('Invalid codon');
    }
  }

  return proteins;
  
};

