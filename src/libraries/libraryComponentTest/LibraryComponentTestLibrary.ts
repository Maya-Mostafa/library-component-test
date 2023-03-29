import {IExtensibilityLibrary, IDataSourceDefinition, ILayoutDefinition, IComponentDefinition, ISuggestionProviderDefinition} from '@aequos/extensibility';

export class LibraryComponentTestLibrary implements IExtensibilityLibrary {
  
  public getCustomDataSources(): IDataSourceDefinition[] {
    return [];
  }
  public getCustomLayouts(): ILayoutDefinition[] {
    return [];
  }
  public getCustomWebComponents(): IComponentDefinition<any>[] {
    return [];
  }
  public getCustomSuggestionProviders(): ISuggestionProviderDefinition[] {
    return [];
  }
  
  
  public name(): string {
    return 'LibraryComponentTestLibrary';
  }
}
