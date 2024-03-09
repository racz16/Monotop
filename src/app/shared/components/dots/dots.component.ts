import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Rectangle } from '../../interfaces/rectangle';

@Component({
    selector: 'app-dots',
    templateUrl: './dots.component.html',
    styleUrls: ['./dots.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class DotsComponent {
    @Input() emptyColor = 'transparent';
    @Input() normalColor = '#62e067';
    @Input() intersectionColor = '#555f6733';
    @Input({ required: true }) rectangles: Rectangle[] = [];

    getColumnIndices(): number[] {
        const rectangles = this.getValidRectangles();
        const size = rectangles.length ? Math.max(...rectangles.map((rectangle) => rectangle.x + rectangle.width)) : 0;
        return this.getIndices(size);
    }

    getRowIndices(): number[] {
        const rectangles = this.getValidRectangles();
        const size = rectangles.length ? Math.max(...rectangles.map((rectangle) => rectangle.y + rectangle.height)) : 0;
        return this.getIndices(size);
    }

    private getValidRectangles(): Rectangle[] {
        return (
            this.rectangles?.filter(
                (rectangle) => rectangle.x >= 0 && rectangle.y >= 0 && rectangle.width > 0 && rectangle.height > 0
            ) ?? []
        );
    }

    private getIndices(size: number): number[] {
        return new Array(size).fill(0).map((_, i) => {
            return i;
        });
    }

    getColor(x: number, y: number): string {
        let filled = 0;
        for (const rectangle of this.rectangles) {
            if (this.isInsideTheRectangle(x, y, rectangle)) {
                filled++;
            }
        }
        if (filled === 0) {
            return this.emptyColor;
        } else if (filled === 1) {
            return this.normalColor;
        } else {
            return this.intersectionColor;
        }
    }

    private isInsideTheRectangle(x: number, y: number, rectangle: Rectangle): boolean {
        return (
            rectangle.x <= x &&
            x < rectangle.x + rectangle.width &&
            rectangle.y <= y &&
            y < rectangle.y + rectangle.height
        );
    }
}
