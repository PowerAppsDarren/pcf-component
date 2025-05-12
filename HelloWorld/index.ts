import { IInputs, IOutputs } from "./generated/ManifestTypes";

/**
 * HelloWorld PCF Component Class
 * This class implements the standard PCF control interface and provides
 * a simple Hello World example component.
 * 
 * @implements {ComponentFramework.StandardControl<IInputs, IOutputs>}
 */
export class HelloWorld implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    // Private variables to store the component state
    private _container: HTMLDivElement;
    private _context: ComponentFramework.Context<IInputs>;
    private _notifyOutputChanged: () => void;

    /**
     * Empty constructor.
     * PCF best practice - minimal initialization in constructor
     * Most initialization should happen in the init method
     */
    constructor() {
        // No initialization needed
    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * 
     * @param context - The entire property bag available to control via Context Object; contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions
     * @param notifyOutputChanged - A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously
     * @param state - A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface
     * @param container - If a control is marked control-type='standard', it will receive an empty div element within which it can render its content
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        // Store the context, container and notification method for later use
        this._context = context;
        this._container = container;
        this._notifyOutputChanged = notifyOutputChanged;
        
        // Initialize your UI elements and event handlers here
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * 
     * @param context - The entire property bag available to control via Context Object; contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // Store the latest context for use in other methods
        this._context = context;
        
        // Get the current value of the bound property
        const currentValue = context.parameters.sampleProperty.raw || "";
        
        // Update your UI based on the new context values
        // Example: this._container.innerHTML = `Hello, ${currentValue}!`;
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * Returns an object based on nomenclature defined in manifest, expecting object(s) for property marked as "bound" or "output"
     * 
     * @returns {IOutputs} - Object containing all outputs of this control
     */
    public getOutputs(): IOutputs {
        // Return the current value of your bound properties
        return {
            // Example: sampleProperty: this._currentValue
        };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Remove event listeners and perform cleanup
        // Example: window.removeEventListener("resize", this._onResize);
    }
}
