export class House {
    public parts: String[] = [];
    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
} 